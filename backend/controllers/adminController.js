import AdminService from "../services/adminService.js";
import NurseService from "../services/nurseService.js";
import bcrypt from "bcryptjs";

class AdminController {
  static loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // get user from database
    let admin;
    try {
      admin = await AdminService.loginAdmin({ username, password });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (!admin) {
      return res.status(401).json({ message: "Invalid username or Password" });
    }
    // set cookies
    res.cookie("id", admin.id, {
      httpOnly: true,
    });
    res.cookie("username", admin.username, {
      httpOnly: true,
    });
    res.cookie("role", admin.role, {
      httpOnly: true,
    });

    // send json data to client
    return res.json({
      user: {
        id: admin.id,
        username: admin.username,
        name: admin.name,
        role: admin.role,
      },
      auth: true,
    });
  };

  static logoutAdmin = async (req, res) => {
    res.clearCookie("id");
    res.clearCookie("username");
    res.clearCookie("role");
    res.json({ message: "logout success" });
  };

  static createNurse = async (req, res) => {
    const { id: adminID, role } = req.cookies;
    const { name, username, password } = req.body;

    if (!adminID || !name || !username || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    // only admin can create nurse
    if (role !== "admin") {
      return res.status(401).json({ message: "Only admin can add nurse" });
    }

    try {
      const nurseExist = await NurseService.checkUsername(username);
      if (nurseExist !== null) {
        return res.status(400).json({ message: "username already exist" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    const encPassword = await bcrypt.hash(password, 10);

    let nurse;
    try {
      nurse = await NurseService.createNurse({
        name,
        username,
        password: encPassword,
        createdBy: adminID,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    return res.json({ message: "create nurse", nurse });
  };

  static removeNurse = async (req, res) => {
    const { role } = req.cookies;
    const { id } = req.body;

    if (!role || !id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (role !== "admin") {
      return res.status(401).json({ message: "Only admin can remove nurse" });
    }

    let removed;
    try {
      removed = await NurseService.removeNurse(id);
    } catch (err) {
      console.Console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (removed.deletedCount === 0) {
      return res.status(404).json({ message: "nurse not found not deleted" });
    }

    return res.json({ message: "nurse deleted success" });
  };

  static getNurses = async (req, res) => {
    let nurses;
    try {
      nurses = await NurseService.getNurses();
      // console.log(nurses);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (nurses.length === 0) {
      return res.json({ message: "no nurses" });
    }

    nurses.map((nurse) => (nurse.password = null));

    return res.json(nurses);
  };
}

export default AdminController;
