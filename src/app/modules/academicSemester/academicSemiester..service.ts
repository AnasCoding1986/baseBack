import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemiester.model';
import { academicSemesterNameCodeMapper } from './academicSemister.constant';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemesterModel.create(payload);
  return result;
};

export const AcademicSemessterServices = {
  createAcademicSemesterIntoDB,
};
