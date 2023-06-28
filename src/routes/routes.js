const express = require("express");
const employeeController = require("../controllers/employeeController");

const validator = require("../middelwear/validator");
const router = express.Router();

router.post(
  "/employees",
  validator.createEmployeeValidation,
  employeeController.createEmployee
);
router.get("/employees", employeeController.getEmployee);
router.put(
  "/employees/:id",
  validator.updateEmployeeValidation,
  employeeController.updateEmployee
);
router.delete("/employees/:id", employeeController.deleteEmployee);
router.get("/employees/:id", employeeController.getEmployeeByid);

module.exports = router;
