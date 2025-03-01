import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { studentID } = req.params;

  try {
    const result = await studentServices.getSingleStudentFromDB(studentID);

    res.status(200).json({
      success: true,
      message: 'Student is retrived for survive successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
};
