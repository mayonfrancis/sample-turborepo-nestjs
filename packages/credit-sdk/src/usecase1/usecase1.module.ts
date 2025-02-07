import { Module } from "@nestjs/common";
import { Usecase1Service } from "./usecase1.service";

@Module({
  providers: [Usecase1Service],
})
export class Usecase1Module {}
