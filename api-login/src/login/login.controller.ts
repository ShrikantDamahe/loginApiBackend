/* eslint-disable prettier/prettier */
import { 
  Controller,
  Post, 
  Body, 
  Get, 
  Param, 
  Delete 
}
 from '@nestjs/common';
import { CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';
import { LoginService } from './login.service';
import { ValidationPipe } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
// post method for create 
  @Post()
  async createuser(@Body(ValidationPipe) createLoginDto: CreateLoginDto) {
      return  this.loginService.create(createLoginDto);
    } 
//it is foe get the data
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.loginService.findOne(id); 
  }
//for delete the data
  @Delete(':id')
  async remove(@Param('id') id: string, @Body() deleteLoginDto: DeleteLoginDto) {
    return this.loginService.remove(id, deleteLoginDto);
  }
}
