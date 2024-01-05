import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";
import { ConfigEnum } from "../enum/config";
import process from "process";

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {
  }

  @Get()
  getUsers() {
    // const db = this.configService.get(ConfigEnum.DB);
    // const url = this.configService.get("DB_URL");
    const data = this.configService.get("dbx");
    console.log('data');
    console.log(data);
    return this.userService.getUsers();
  }
}
