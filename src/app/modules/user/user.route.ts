import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.zod.validation';
import validateRequest from '../../middlewire/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.CreateStudentValidationSchema),
  userController.createStudent,
);

export const UserRoutes = router;
