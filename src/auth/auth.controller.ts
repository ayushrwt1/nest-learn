import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUserDTO';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registerUserDto: RegisterDto) {
        const createdUser = await this.authService.registerUser(registerUserDto);
        return createdUser;
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginDto) {
        const token = await this.authService.loginUser(loginUserDto);
        return token;
    }
}
