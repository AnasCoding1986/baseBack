import { RequestHandler } from 'express';
import sendResponse from '../../middlewire/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemessterServices } from './academicSemiester..service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemessterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});
export const academicSemesterController = {
  createAcademicSemester,
};
