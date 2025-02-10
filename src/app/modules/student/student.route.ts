import express from "express"
import { studentController } from "./student.controller";

const router = express.Router();

router.post('crete-student', studentController.createStudent);

export const studentRoute = router;