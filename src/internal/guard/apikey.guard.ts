import { AppConfig } from "@/config/config";
import { APP_CONFIG } from "@/config/config.module";
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class APIKeyAuthGuard implements CanActivate {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    const extractedHeader = request.headers[this.appConfig.server.authHeader];
    if (extractedHeader == null) {
      return false;
    }

    return extractedHeader === this.appConfig.server.authValue;
  }
}
