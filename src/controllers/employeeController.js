const employeeModel = require("../models/empolyeeModel");
const { validationResult } = require("express-validator");
// Create Employee
const createEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age, contacts } = req.body;

    if (!name || !age || !contacts) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const employee = new employeeModel({ name, age, contacts });

    const savedEmployee = await employee.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ message: "Failed to create employee" });
  }
};

// List Employees with Pagination
const getEmployee = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const employees = await employeeModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(employees);
  } catch (error) {
    console.error("Error retrieving employees:", error);
    res.status(500).json({ message: "Failed to retrieve employees" });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, age, contacts } = req.body;

    if (!name || !age || !contacts) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const updatedEmployee = await employeeModel.findByIdAndUpdate(
      id,
      { name, age, contacts },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(updatedEmployee);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: "Failed to update employee" });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmployee = await employeeModel.findByIdAndRemove(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ message: "Failed to delete employee" });
  }
};

// Get Employee
const getEmployeeByid = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await employeeModel.findById(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    console.error("Error retrieving employee:", error);
    res.status(500).json({ message: "Failed to retrieve employee" });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByid,
};
