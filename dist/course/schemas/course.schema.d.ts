import { HydratedDocument } from 'mongoose';
export type CourseDocument = HydratedDocument<Course>;
export declare class Course {
    name: string;
    description: string;
    level: string;
    price: number;
}
export declare const CourseSchema: import("mongoose").Schema<Course, import("mongoose").Model<Course, any, any, any, (import("mongoose").Document<unknown, any, Course, any, import("mongoose").DefaultSchemaOptions> & Course & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Course, any, import("mongoose").DefaultSchemaOptions> & Course & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Course>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Course, import("mongoose").Document<unknown, {}, Course, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Course & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Course, import("mongoose").Document<unknown, {}, Course, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Course, import("mongoose").Document<unknown, {}, Course, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    level?: import("mongoose").SchemaDefinitionProperty<string, Course, import("mongoose").Document<unknown, {}, Course, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, Course, import("mongoose").Document<unknown, {}, Course, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Course>;
