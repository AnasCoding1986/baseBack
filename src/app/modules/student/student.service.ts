import StudentModel from './student.model';

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (_id: string) => {
  const result = await StudentModel.findOne({ _id });
  return result;
};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
