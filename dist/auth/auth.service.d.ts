import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/loginUserDTO';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    registerUser(registerUserDto: RegisterDto): Promise<{
        access_token: string;
    }>;
    loginUser(loginUserDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
