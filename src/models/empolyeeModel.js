const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  contacts: [
    {
      type: {
        type: {
          type: String,
          enum: ["phone", "email"],
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    },
  ],
});

module.exports = mongoose.model("employee", employeeSchema);
