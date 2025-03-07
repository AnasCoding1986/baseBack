import { Schema, model } from 'mongoose';
import { TAcademicSemester, TMonth } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemister.constant';

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    code: { type: String, enum: AcademicSemesterCode, required: true },
    year: { type: String, required: true },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  { timestamps: true },
);

AcademicSemesterSchema.pre('save', async function (next) {
  const existSemester = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (existSemester) {
    throw new Error('Semester is already exists');
  }

  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);
