const express = require("express");
const router = express.Router();
const {
  homePage,
  getAllEmployee,
  getUpdateEmployee,
  updateEmployee,
  employeeProfile,
  getLoginEmployee,
  loginEmployee,
} = require("../controllers/employeeController");

const { checkEmployee } = require("../middleware/authMiddleware");

router.get("/", checkEmployee, homePage);

router.route("/employees").get(getAllEmployee);
router.route("/updateemployee/:id").get(getUpdateEmployee).post(updateEmployee);
router.route("/:id/profile").get(employeeProfile);
router.route("/login-employee").get(getLoginEmployee).post(loginEmployee);

module.exports = router;
