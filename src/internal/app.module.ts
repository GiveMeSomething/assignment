import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { LoggerModule } from "nestjs-pino";
import { ConfigModule } from "@/config/config.module";
import { TeacherController } from "./controller/teacher.controller";

@Module({
  imports: [LoggerModule.forRoot(), DatabaseModule, ConfigModule],
  controllers: [AppController, TeacherController],
})
export class AppModule {}
