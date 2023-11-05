import NurseModel from "../models/nurseModel.js";
import bcrypt from "bcryptjs";

class NurseService {
  static createNurse = async (data) => {
    const nurse = await NurseModel.create(data);
    return nurse;
  };

  static removeNurse = async (id) => {
    const removed = await NurseModel.deleteOne({ _id: id });
    return removed;
  };

  static checkUsername = async (username) => {
    const nurse = await NurseModel.findOne({ username });
    return nurse;
  };

  static verifyNurse = async (id, username) => {
    const nurse = await NurseModel.findOne({
      $and: [{ _id: id }, { username }],
    });
    return nurse;
  };

  static getNurses = async () => {
    const nurses = await NurseModel.find().populate("createdBy");
    return nurses;
  };

  static loginNurse = async (username, password) => {
    let nurse = await NurseModel.findOne({ username });

    if (nurse) {
      const result = await bcrypt.compare(password, nurse.password);
      if (result) {
        return nurse;
      }
    }
    return (nurse = null);
  };
}

export default NurseService;
