import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
export declare class CourseService {
    private courseModel;
    constructor(courseModel: Model<Course>);
    create(createCourseDto: CreateCourseDto): Promise<import("mongoose").Document<unknown, {}, Course, {}, import("mongoose").DefaultSchemaOptions> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourseDto: UpdateCourseDto): string;
    remove(id: number): string;
}
