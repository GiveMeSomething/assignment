import { IsEmail } from "class-validator";

export class RegisterStudentsDTO {
  @IsEmail()
  teacher: string;

  @IsEmail({}, { each: true })
  students: string[];
}
