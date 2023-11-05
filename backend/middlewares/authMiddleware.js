import AdminService from "../services/adminService.js";
import NurseService from "../services/nurseService.js";
import superUserService from "../services/superUserService.js";

class AuthMiddleware {
  static UserAuth = async (req, res, next) => {
    try {
      const { id, username, role } = req.cookies;

      console.log(id, username, role);
      if (!id || !username || !role) {
        // throw new Error();
        return res
          .status(400)
          .json({
            success: false,
            message: "please provide authorised username, id, and role.  recieved id: " + id + " username: " + username + " role: " + role,
          });
      }

      let userData;
      if (role === "superuser") {
        try {
          userData = await superUserService.verifyUser(id, username);
        } catch (err) {
          console.log(err);
          return res.status(500).json({ message: "DB error" });
        }
      } else if (role === "admin") {
        try {
          userData = await AdminService.verifyAdmin(id, username);
        } catch (err) {
          console.log(err);
          return res.status(500).json({ message: "DB error" });
        }
      } else if (role === "nurse") {
        try {
          userData = await NurseService.verifyNurse(id, username);
        } catch (err) {
          console.log(err);
          return res.status(500).json({ message: "DB error" });
        }
      } else {
        throw new Error();
      }

      // console.log(userData);
      req.user = userData;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid User" });
    }
  };
}

export default AuthMiddleware;
