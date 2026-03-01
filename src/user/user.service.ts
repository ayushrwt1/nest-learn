import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ) { }

    async createUser(registerUserDto: RegisterDto) {
        try {
            const createdUser = await this.userModel.create({
                fname: registerUserDto.fname,
                lname: registerUserDto.lname,
                email: registerUserDto.email,
                password: registerUserDto.password,
            });
            return createdUser;
        } catch (error : unknown) {
            console.error('Error creating user:', error);
            const err = error as { code?: number };
            const DUPLICATE_KEY_ERROR_CODE = 11000;
            if (err.code === DUPLICATE_KEY_ERROR_CODE) {
                throw new ConflictException('Email already exists');
            }
            throw err;
        }
    }
    async findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }

    async findById(id: string) {
        return this.userModel.findById(id);
    }

    async getAllUsers() {
        return this.userModel.find();
    }
}
