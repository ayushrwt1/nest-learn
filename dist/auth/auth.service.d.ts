import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(registerUserDto: RegisterDto): Promise<{
        user: import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        message: string;
    }>;
}
