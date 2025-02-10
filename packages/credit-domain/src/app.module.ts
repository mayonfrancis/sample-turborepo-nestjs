import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { Usecase1Module } from "./usecase1/usecase1.module";

@Module({
  imports: [Usecase1Module],
  providers: [AppService],
})
export class AppModule {}
