import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName:string,
    fatherOccupation:string,
    fatherContactNo:number,
    motherName:string,
    motherOccupation:string,
    motherContactNo:number,
};

export type LocalGuardian = {
    name:string,
    occupation:string,
    contactNo:number,
    address:string,
};

export type UserName = {
    firstName: string;
    middleName?: string; // Make it optional
    lastName: string;
};


export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: "male" | "female";
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: {
        fatherName: string;
        fatherContactNo: string;  // Change from `number` to `string`
        motherName: string;
        motherContactNo: string;
    };
    localGuardian: {
        name: string;
        contactNo: string;
    };
    profileImg?: string;
    isActive: boolean;
};

