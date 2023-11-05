import AdminService from "../services/adminService.js";
import NurseService from "../services/nurseService.js";
import superUserService from "../services/superUserService.js";

class AuthController {
  static refresh = async (req, res) => {
    const { id, username, role } = req.cookies;
    console.log(id, username, role);

    // check id and username is present or not in cookie
    if (!id || !username || !role) {
      return res.status(401).json({ message: "Invalid User" });
    }

    let user;
    if (role === "superuser") {
      try {
        user = await superUserService.verifyUser(id, username);

        if (user === null) {
          return res.status(401).json({ message: "Invalid User" });
        }

        // return res.json({user:{id:superUser._id, username:superUser.username}, auth:true})
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "DB error" });
      }
    } else if (role === "admin") {
      try {
        user = await AdminService.verifyAdmin(id, username);

        if (user === null) {
          return res.status(401).json({ message: "Invalid User" });
        }

        // return res.json({user:{id:admin._id, username:admin.username}, auth:true})
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "DB error" });
      }
    } else if (role === "nurse") {
      try {
        user = await NurseService.verifyNurse(id, username);

        if (user === null) {
          return res.status(401).json({ message: "Invalid User" });
        }

        // return res.json({user:{id:nurse._id, username:nurse.username}, auth:true})
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "DB error" });
      }
    } else {
      return res.status(401).json({ message: "Invalid User" });
    }

    return res.json({
      user: {
        id: user._id,
        username: user.username,
      },
      auth: true,
    });
  };
}

export default AuthController;
