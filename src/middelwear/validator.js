const { body, param, validationResult } = require("express-validator");

// Create Employee validation middleware
const createEmployeeValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("age")
    .isInt({ min: 18 })
    .withMessage("Age must be a number greater than or equal to 18"),
  body("contacts")
    .isArray({ min: 1 })
    .withMessage("Contacts must be an array with at least one entry"),
  body("contacts.*.type")
    .isIn(["phone", "email"])
    .withMessage('Contact type must be either "phone" or "email"'),
  body("contacts.*.value").notEmpty().withMessage("Contact value is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Update Employee validation middleware
const updateEmployeeValidation = [
  param("id").notEmpty().withMessage("Employee ID is required"),
  body("name").optional().notEmpty().withMessage("Name is required"),
  body("age")
    .optional()
    .isInt({ min: 18 })
    .withMessage("Age must be a number greater than or equal to 18"),
  body("contacts")
    .optional()
    .isArray({ min: 1 })
    .withMessage("Contacts must be an array with at least one entry"),
  body("contacts.*.type")
    .optional()
    .isIn(["phone", "email"])
    .withMessage('Contact type must be either "phone" or "email"'),
  body("contacts.*.value")
    .optional()
    .notEmpty()
    .withMessage("Contact value is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { createEmployeeValidation, updateEmployeeValidation };
