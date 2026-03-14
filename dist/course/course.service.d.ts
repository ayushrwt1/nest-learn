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
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Course, {}, import("mongoose").DefaultSchemaOptions> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Course, {}, import("mongoose").DefaultSchemaOptions> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<(import("mongoose").Document<unknown, {}, Course, {}, import("mongoose").DefaultSchemaOptions> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Course, {}, import("mongoose").DefaultSchemaOptions> & Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
