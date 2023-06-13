/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Login {
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
}

//for validate user when create or delete

export class CreateLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class DeleteLoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
