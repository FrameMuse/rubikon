import { Doctor } from "../doctor/type"

export interface Patient {
  id: number

  name: string
  surname: string
  middleName: string
  fullName: string
  age: number
  gender: PatientGender

  analyzes: PatientAnalyze[]
  diagnosis: string
  therapist: Doctor

  birthDate: Date
}

export type PatientGender = "male" | "female"

export interface PatientAnalyze {
  id: number
  patientId: number

  appointment: string
  ICD10Code: string
  diagnosis: string
  date: Date
}
export interface PatientDiagnosis {
  ICD10Code: string
}
