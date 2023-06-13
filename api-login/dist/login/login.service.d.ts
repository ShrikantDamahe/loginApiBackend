import { Model } from 'mongoose';
import { Login, CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';
export declare class LoginService {
    private readonly loginModel;
    constructor(loginModel: Model<Login>);
    create(createLoginDto: CreateLoginDto): Promise<Login>;
    findOne(id: string): Promise<Login | null>;
    remove(id: string, deleteLoginDto: DeleteLoginDto): Promise<Login | null>;
}
