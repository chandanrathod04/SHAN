import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    mrNo: { type: Number, unique: true, required: true },
    department: { type: String, required: true },
    identification: {
      name: { type: String, required: true },
      age: { type: Number },
      sex: { type: String },
      ward: { type: String },
      bedNo: { type: Number },
      ipdNo: { type: Number },
      dateOfAdmission: { type: Date },
      patientCategory: { type: String },
      drName: { type: String },
      unit: { type: Number },
      diagnosis: { type: String },
      chiefComplaints: { type: String },
      historyOfPresentIllness: { type: String },
      allergy: { type: String },
    },
    situation: {
      oxygenSupport: {
        os: {
          type: String,
          enum: [
            "roomAir",
            "nasalCannula",
            "oxygenMask",
            "venturiMask",
            "highFlowMask",
            "highFlowNasalCannula",
            "bpapMask",
            "Other",
          ],
        },
        value: { type: String },
      },
      ventilatorSupport: {
        vs: {
          type: String,
          enum: ["prvc", "cpap", "simv", "ps", "pc", "other"],
        },
        fiO2: { type: Number },
        peep: { type: Number },
        rr: { type: Number },
        tidalVolume: { type: Number },
        other: { type: String },
      },
      continuousInfusion: {
        inotrope: {
          positive: {
            type: String,
            enum: [
              "noradrenaline",
              "dopamine",
              "dobutamine",
              "adrenaline",
              "atropine",
              "other",
            ],
          },
          pOther: { type: String },
          negative: {
            type: String,
            enum: [
              "labetalol",
              "nitroglycerin",
              "sodiumNitroprusside",
              "amiodarone",
              "other",
            ],
          },
          nOther: { type: String },
        },
        electrolytesCorrection: {
          type: String,
        },
        IVIg: {
          type: String,
        },
        HAI: {
          type: String,
        },
        fentanyl: {
          type: String,
        },
        atracurium: {
          type: String,
        },
        midazolam: {
          type: String,
        },
        sodiumBicarbonate: {
          type: String,
        },
        other: {
          type: String,
        },
      },
      nutritionalStatus: {
        oral: { type: String },
        rtFeeding: { type: String },
        nbm: { type: String },
        other: { type: String },
        fluidRestriction: { type: String },
      },
    },
    background: {
      pastMedicalHistory: {
        type: String,
      },
      pastSurgicalHistory: { type: String },
      medication: { type: String },
      bloodProducts: {
        wholeBlood: { type: Number, default: 0 },
        packRedBloodCell: { type: Number, default: 0 },
        freshFrozenPlasma: { type: Number, default: 0 },
        singleDonorPlateletes: { type: Number, default: 0 },
        cryoprecipitateAntihemophilicFactor: { type: Number, default: 0 },
      },
      skinImpairment: {
        bedSore: {
          stage: { type: String, enum: ["present", "absent"] },
          oozing: { type: String, enum: ["done", "notDone"] },
          positioning: { type: String, enum: ["given", "notGiven"] },
        },
        wound: {
          stage: { type: String, enum: ["present", "absent"] },
          oozing: { type: String, enum: ["done", "notDone"] },
          positioning: { type: String, enum: ["given", "notGiven"] },
        },
        burn: {
          stage: { type: String, enum: ["present", "absent"] },
          oozing: { type: String, enum: ["done", "notDone"] },
          positioning: { type: String, enum: ["given", "notGiven"] },
        },
      },
      totalHemodialysis: {
        type: Number,
      },
    },
    assessment: {
      vitalSigns: {
        temperature: { type: Number },
        pulse: { type: Number },
        respiration: { type: Number },
        bloodPressure: {
          sistolic: { type: Number },
          distolic: { type: Number },
        },
      },
      spo2: {
        type: Number,
      },
      otherParameters: {
        etco2: { type: String },
        cvp: { type: String },
        abp: { type: String },
      },
      ecg: {
        type: String,
        enum: ["sr", "sb", "st"],
      },
      arrhythmia: {
        type: String,
        enum: ["svt", "af", "af1", "vTach", "vf"],
      },
      invasiveLines: {
        veinFlow: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        centralLine: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        arterialLine: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        hdCatheter: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        rylesTube: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        foleysCatheter: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        endotrachealTube: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        tracheostomyTube: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        intercostalDrain: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
        other: {
          doi: { type: String },
          size: { type: String },
          site: { type: String },
          dod: { type: String },
          dor: { type: String },
        },
      },
      scales: {
        gcs: {
          eyes: {
            type: Number,
          },
          verbalResponse: {
            type: Number,
          },
          motorResponse: {
            type: Number,
          },
          total: {
            type: Number,
          },
        },
        numericRatingScale: {
          type: Number,
          min: 0,
          max: 10,
        },
        bradenScale: {
          sensoryPerception: {
            type: Number,
          },
          moisture: {
            type: Number,
          },
          activity: {
            type: Number,
          },
          mobility: {
            type: Number,
          },
          nutrition: {
            type: Number,
          },
          frictionAndShear: {
            type: Number,
          },
          total: {
            type: Number,
          },
        },
        fallRiskAssessmentScore: {
          historyOfFall: { type: Number, enum: [0, 25] },
          secondaryDiagnosis: { type: Number, enum: [0, 25] },
          ambulatoryAid: { type: Number, enum: [0, 15, 30] },
          iv: { type: Number, enum: [0, 20] },
          gait: { type: Number, enum: [0, 10, 20] },
          mentalStatus: { type: Number, enum: [0, 15] },
        },
        vip: {
          type: Number,
          min: 0,
          max: 5,
        },
        cpot: {
          facialExpression: {
            type: Number,
          },
          bodyMovements: {
            type: Number,
          },
          muscleTension: {
            type: Number,
          },
          complianceWithTheVentilator: {
            type: Number,
          },
          vocalization: {
            type: Number,
          },
        },
      },
      intake: {
        oral: { type: Number },
        rt: { type: Number },
        iv: { type: Number },
        other: { type: Number },
        total: { type: Number },
      },
      output: {
        urine: { type: Number },
        rta: { type: Number },
        drain: { type: Number },
        other: { type: Number },
        total: { type: Number },
      },
      investigations: {
        pathology: {
          randomBloodSugar: {
            type: Number,
          },
          hemoglobin: {
            type: Number,
          },
          wbc: {
            type: Number,
          },
          rbc: {
            type: Number,
          },
          plateletCount: {
            type: Number,
          },
          creatine: {
            type: Number,
          },
          sodium: {
            type: Number,
          },
          potassium: {
            type: Number,
          },
          chloride: {
            type: Number,
          },
          abg: {
            type: Number,
          },
          hhh: {
            type: Number,
          },
          lft: {
            type: Number,
          },
          coagulationProfile: {
            type: Number,
          },
          other: {
            type: String,
          },
        },
        radiology: {
          xray: { type: String },
          ctScan: { type: String },
          mri: { type: String },
          other: { type: String },
        },
      },
    },
    recommendation: {
      pendingMedication: {
        type: String,
      },
      pendingReports: {
        type: String,
      },
      references: {
        type: String,
      },
      specialOrder: {
        type: String,
      },
      pendingProcedures: {
        type: String,
      },
      otherOrder: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const PatientModel = mongoose.model("Patient", PatientSchema);
export const PatientHistoryModel = mongoose.model(
  "PatientHistory",
  PatientSchema
);

export default PatientModel;
