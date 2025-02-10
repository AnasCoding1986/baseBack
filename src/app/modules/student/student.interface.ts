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

export type UserName ={
    firstName:string;
    middleName:string;
    lastName:string;
}

export type Student = {
    id:string;
    name: UserName;
    gender: 'male'|'female';
    dateOfBirth:string;
    email: string;
    contactNo:string;
    emergencyContactNo:string;
    bloodGroup:"A+"|"A-"|"B+"|"B-"|"AB+"|"AB-";
    presentAddress:string;
    permanentAddress:string;
    guardian:Guardian;
    localGuardian:LocalGuardian;
    profileImg?:string;
    isActive:true|false;
  }