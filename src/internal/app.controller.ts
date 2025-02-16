import { Controller, Get, HttpCode, UseGuards } from "@nestjs/common";
import { APIKeyAuthGuard } from "./guard/apikey.guard";

@Controller()
export class AppController {
  constructor() {}

  @Get("health_check")
  @HttpCode(200)
  healthCheck() {
    return "healthy";
  }

  @Get("protect")
  @UseGuards(APIKeyAuthGuard)
  execProtectedEndpoint() {
    return "OK";
  }
}
