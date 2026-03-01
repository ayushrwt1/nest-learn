import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterDto): Promise<{
        access_token: string;
    }>;
}
