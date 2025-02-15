import { Request, Response } from "express";
import { studentServices } from "./student.service";
import StudentValidationZodSchema from "./student.zod.validation";

const createStudent = async(req:Request, res:Response) => {
    try {
        const {student:studentData} = req.body;

        const zodParseData = StudentValidationZodSchema.parse(studentData);

        const result = await studentServices.createStudentIntoDB(zodParseData);
    
        res.status(200).json({
            success:true,
            message:"Warrior 2 (conceptual craking start) Student is created successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
};

const getAllStudents = async (req:Request, res:Response) => {
    try {
        const result = await studentServices.getAllStudentFromDB();
    
        res.status(200).json({
            success:true,
            message:"Students are retrived successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleStudent = async (req:Request, res:Response) => {

    const {studentID} = req.params;

    try {
        const result = await studentServices.getSingleStudentFromDB(studentID);
    
        res.status(200).json({
            success:true,
            message:"Student is retrived for survive successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
}



export const studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
}