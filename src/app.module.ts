import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import * as dotenv from "dotenv";
import Configuration from "./configuration";

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
