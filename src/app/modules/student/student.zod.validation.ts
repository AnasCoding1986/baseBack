import { z } from 'zod';

const UserNameSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().default(''), // Optional middle name
  lastName: z.string().min(1, 'Last name is required'),
});

const GuardianSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required'),
  fatherOccupation: z.string().min(1, 'Father occupation is required'),
  fatherContactNo: z
    .number()
    .int()
    .positive('Father contact must be a valid number'),
  motherName: z.string().min(1, 'Mother name is required'),
  motherOccupation: z.string().min(1, 'Mother occupation is required'),
  motherContactNo: z
    .number()
    .int()
    .positive('Mother contact must be a valid number'),
});

const LocalGuardianSchema = z.object({
  name: z.string().min(1, 'Local guardian name is required'),
  occupation: z.string().min(1, 'Local guardian occupation is required'),
  contactNo: z
    .number()
    .int()
    .positive('Local guardian contact must be a valid number'),
  address: z.string().min(1, 'Local guardian address is required'),
});

const CreateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      user: z.string().min(1, 'User ID is required'), // ObjectId reference
      name: UserNameSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.date().optional(),
      email: z.string().email('Invalid email address'),
      contactNo: z.string().min(1, 'Contact number is required'),
      emergencyContactNo: z
        .string()
        .min(1, 'Emergency contact number is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string().min(1, 'Present address is required'),
      permanentAddress: z.string().min(1, 'Permanent address is required'),
      guardian: GuardianSchema,
      localGuardian: LocalGuardianSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  CreateStudentValidationSchema,
};
