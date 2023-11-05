import PatientModel from "../models/patientModel.js";

class PatientService {
  static checkPatientExist = async (mrNo) => {
    const patient = await PatientModel.findOne({ mrNo: mrNo});
    return patient ? true : false;
  };

  static getAllPatientInDepartment = async (department) => {
    const patients = await PatientModel.find({
      "department": department,
    });
    return patients;
  };

  static getPatient = async (id, mrNo)=>{
    const patient = await PatientModel.findOne({$and: [{_id:id},
    {mrNo}]});
    return patient;
  }

  static createPatient = async (mrNo, department, rest) => {
    const patient = await PatientModel.create({
      mrNo,
      department,
      identification: rest,
    });
    return patient;
  };

  static addSituation = async (id, patientSituation) => {
    const patient = await PatientModel.findByIdAndUpdate(id, {
      situation: patientSituation,
    });

    return patient;
  };
}

export default PatientService;
