import { CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    createuser(createLoginDto: CreateLoginDto): Promise<import("./dtos/dto.login").Login>;
    findOne(id: string): Promise<import("./dtos/dto.login").Login>;
    remove(id: string, deleteLoginDto: DeleteLoginDto): Promise<import("./dtos/dto.login").Login>;
}
