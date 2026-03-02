import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUserDTO';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterDto): Promise<{
        access_token: string;
    }>;
    login(loginUserDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
