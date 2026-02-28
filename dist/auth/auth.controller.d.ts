import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterDto): Promise<{
        result: Promise<import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }>;
    }>;
}
