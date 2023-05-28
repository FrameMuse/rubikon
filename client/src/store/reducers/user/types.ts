import { Doctor } from "app/entities/doctor/type"

export type User = UserDefault & UserSigned

export interface UserSigned extends Doctor {
  id: number

  signed: boolean
  type: UserType

  avatar: string
  name: string
  surname: string
  middleName: string
  fullName: string

  createdAt: Date
}

export interface UserDefault {
  signed: boolean
}

/**
 * To help comparing user types, `Admin` is highest in rank for this enum.
 */
export enum UserType {
  Default, Admin
}
