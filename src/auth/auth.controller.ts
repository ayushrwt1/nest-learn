import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUserDTO';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, ) { }

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

    @UseGuards(AuthGuard) // 💡 This guard will protect the route and ensure that only authenticated users can access it
    @Get('profile')
    async getProfile(@Request() req) {
        // 💡 The user information is available in req.user because we assigned it in the AuthGuard
        const userId = req.user.sub;

        const user = await this.authService.findUserById(userId);
        return {
            id : user?._id,
            fname: user?.fname,
            lname: user?.lname,
            email: user?.email,
        };
    }
}
