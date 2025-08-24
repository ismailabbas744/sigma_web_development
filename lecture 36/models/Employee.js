import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: String,
  age: Number
});

export const Employee = mongoose.model('Employee', EmployeeSchema);