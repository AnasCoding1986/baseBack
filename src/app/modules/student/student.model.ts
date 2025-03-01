import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const GuardianSchema = new Schema<Guardian>(
  {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: Number, required: true }, // Kept as Number
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: Number, required: true }, // Kept as Number
  },
  { _id: false },
);

const LocalGuardianSchema = new Schema<LocalGuardian>(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: Number, required: true }, // Kept as Number
    address: { type: String, required: true },
  },
  { _id: false },
);

const UserNameSchema = new Schema<UserName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, default: '' }, // Optional middle name
    lastName: { type: String, required: true },
  },
  { _id: false },
);

const StudentSchema = new Schema<Student>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true }, // Kept as String for flexibility
    emergencyContactNo: { type: String, required: true }, // Kept as String for flexibility
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImg: { type: String, default: '' },
  },
  { timestamps: true },
);

const StudentModel = model<Student>('Student', StudentSchema);

export default StudentModel;
