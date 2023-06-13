import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login, CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private readonly loginModel: Model<Login>) {}

  // for creating now login object
  async create(createLoginDto: CreateLoginDto): Promise<Login> {
    const newLogin = new this.loginModel(createLoginDto);
    return newLogin.save();
  }

  async findOne(id: string): Promise<Login | null> {
    return this.loginModel.findById(id).exec();
  }

  // for Deleting the data
  async remove(id: string, deleteLoginDto: DeleteLoginDto): Promise<Login | null> {
    const removedLogin = await this.loginModel.findOneAndDelete({ _id: id, ...deleteLoginDto }).exec();
    return removedLogin;
  }
}
