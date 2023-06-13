/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './login.schema';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
    MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema }]),
  ],
})
export class LoginModule {}

  