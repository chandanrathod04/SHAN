import express from "express";
import AdminController from "./controllers/adminController.js";
import AuthController from "./controllers/authController.js";
import NurseController from "./controllers/nurseController.js";
import SuperUserController from "./controllers/superUserController.js";
import AuthMiddleware from "./middlewares/authMiddleware.js";

const router = express.Router();

// SUPER USER ROUTES
router.post("/create-superuser", SuperUserController.create);
router.post("/login-superuser", SuperUserController.loginUser);
router.post(
  "/logout-superuser",
  AuthMiddleware.UserAuth,
  SuperUserController.logoutSuper
);
router.post(
  "/create-admin",
  AuthMiddleware.UserAuth,
  SuperUserController.createAdmin
);
router.post(
  "/remove-admin",
  AuthMiddleware.UserAuth,
  SuperUserController.removeAdmin
);
router.post(
  "/get-admins",
  AuthMiddleware.UserAuth,
  SuperUserController.getAdmins
);

// ADMIN ROUTES
router.post("/login-admin", AdminController.loginAdmin);
router.post(
  "/logout-admin",
  AuthMiddleware.UserAuth,
  AdminController.logoutAdmin
);
router.post(
  "/create-nurse",
  AuthMiddleware.UserAuth,
  AdminController.createNurse
);
router.post(
  "/remove-nurse",
  AuthMiddleware.UserAuth,
  AdminController.removeNurse
);
router.post("/get-nurses", AuthMiddleware.UserAuth, AdminController.getNurses);

// ---------------------------->NURSE ROUTES<--------------------------------------------
router.post("/login-nurse", NurseController.loginNurse);
router.post(
  "/logout-nurse",
  AuthMiddleware.UserAuth,
  NurseController.logoutNurse
);

// get all patient in particular department
router.get(
  "/department/:department/",
  AuthMiddleware.UserAuth,
  NurseController.getAllPatient
);

// get single patient by id and mrNo
router.get(
  "/patient/:id/:mrNo",
  AuthMiddleware.UserAuth,
  NurseController.getSinglePatient
);

// add Patient identification details
router.post(
  "/patient/identification",
  AuthMiddleware.UserAuth,
  NurseController.addPatientIdentification
);
// add Patient situation details
// router.post(
//   "/patient/situation",
//   AuthMiddleware.UserAuth,
//   NurseController.addPatientSituation
// );

// add / update patient ISBAR component (not updating mrNo)
router.post(
  "/patient/update",
  AuthMiddleware.UserAuth,
  NurseController.updatePatient
);

// remove patient and add to history
router.delete(
  "/patient",
  AuthMiddleware.UserAuth,
  NurseController.removePatient
);

// refresh for all roles
router.get("/refresh", AuthController.refresh);

export default router;
