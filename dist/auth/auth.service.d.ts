import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    registerUser(registerUserDto: RegisterDto): Promise<{
        access_token: string;
    }>;
}
