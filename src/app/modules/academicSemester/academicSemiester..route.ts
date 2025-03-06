import express, { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.zod.validation';
import validateRequest from '../../middlewire/validateRequest';
import { AcademicSemesterCode } from './academicSemister.constant';
import { academicSemesterController } from './academicSemiester..controller';
import { academicSemesterValidations } from './academicSemisterValidation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidations.CreateAcademicSemesterValidationSchema,
  ),
  academicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
