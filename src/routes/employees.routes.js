import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  updateEmployes,
  deleteEmployes,
  getEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployees);
router.patch("/employees/:id", updateEmployes);
router.delete("/employees/:id", deleteEmployes);

export default router;
