import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import * as dotenv from "dotenv";
import Configuration from "./configuration";
import * as config from "config"

console.log(config.get("database"));

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        Configuration
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
