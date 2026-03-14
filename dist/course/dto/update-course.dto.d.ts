import { CreateCourseDto } from './create-course.dto';
declare const UpdateCourseDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCourseDto>>;
export declare class UpdateCourseDto extends UpdateCourseDto_base {
    name?: string | undefined;
    description?: string | undefined;
    level?: string | undefined;
    price?: number | undefined;
}
export {};
