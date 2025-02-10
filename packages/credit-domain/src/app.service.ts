import { Injectable } from "@nestjs/common";
import { Usecase1Service } from "./usecase1/usecase1.service";

@Injectable()
export class AppService {
  constructor(public readonly usecase1: Usecase1Service) {}

  getHello(): string {
    return "Hello world!";
  }
}
