import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemister.constant';

const CreateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const academicSemesterValidations = {
  CreateAcademicSemesterValidationSchema,
};
