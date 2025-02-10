import { Injectable } from "@nestjs/common";

@Injectable()
export class Usecase1Service {
  getComplicatedData(): string {
    return "Data from sdk with usecase 1";
  }
}
