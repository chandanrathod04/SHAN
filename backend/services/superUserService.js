import SuperUserModel from "../models/superUserModel.js";
import bcrypt from "bcryptjs";

class superUserService {
  static createSuperUser = async (data) => {
    try {
      const superUser = await SuperUserModel.create(data);
      return superUser;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  static checkUsername = async (username) => {
    const superUser = await SuperUserModel.findOne({ username });
    // console.log(admin);
    return superUser;
  };

  static findUser = async ({ username, password }) => {
    let user = await SuperUserModel.findOne({ username });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return user;
      }
    }
    return (user = null);
  };

  static verifyUser = async (id, username) => {
    const user = await SuperUserModel.findOne({
      $and: [{ _id: id, username }],
    });
    return user;
  };
}

export default superUserService;
