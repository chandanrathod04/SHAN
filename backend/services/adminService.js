import AdminModel from "../models/adminModel.js";
import bcrypt from "bcryptjs";

class AdminService {
  static createAdmin = async (data) => {
    const admin = await AdminModel.create(data);
    return admin;
  };

  static removeAdmin = async ({ id }) => {
    const removed = await AdminModel.deleteOne({ _id: id });
    // console.log(removed);
    return removed;
  };

  static checkUsername = async (username) => {
    const admin = await AdminModel.findOne({ username });
    // console.log(admin);
    return admin;
  };

  static getAdmins = async () => {
    const admins = await AdminModel.find();
    // console.log(admins);
    return admins;
  };

  static verifyAdmin = async (id, username) => {
    const admin = await AdminModel.findOne({
      $and: [{ _id: id }, { username }],
    });
    return admin;
  };

  static loginAdmin = async ({ username, password }) => {
    let admin = await AdminModel.findOne({ username });

    if (admin) {
      const result = await bcrypt.compare(password, admin.password);
      if (result) {
        return admin;
      }
    }

    return (admin = null);
  };
}

export default AdminService;
