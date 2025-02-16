import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { RegisterStudentsDTO } from "../dto/teacher.dto";
import { APIKeyAuthGuard } from "../guard/apikey.guard";

@Controller("api/v1/teacher")
@UseGuards(APIKeyAuthGuard)
export class TeacherController {
  constructor() {}

  @Post("register")
  @HttpCode(204)
  async registerStudent(@Body(ValidationPipe) payload: RegisterStudentsDTO) {
    console.log(payload);
    return "";
  }
}
