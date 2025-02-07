import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AppService } from "./app.service";
import { INestApplicationContext } from "@nestjs/common";

export class CreditSdk {
  private app: INestApplicationContext;

  private services: AppService;

  constructor() {}

  async init() {
    this.app = await NestFactory.createApplicationContext(AppModule);

    this.services = this.app.get(AppService);
    console.log(
      "[INSIDE SDK] Main.services.getHello:",
      this.services.getHello()
    );

    console.log("[INSIDE SDK] init complete");
  }

  async close() {
    return this.app.close();
  }
}
