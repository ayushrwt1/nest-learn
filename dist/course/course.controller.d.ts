import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/course.schema").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/course.schema").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/course.schema").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/course.schema").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/course.schema").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
