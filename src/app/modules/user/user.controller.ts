import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParseData = StudentValidationZodSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message:
        'Warrior 2 (conceptual craking start triling) Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
