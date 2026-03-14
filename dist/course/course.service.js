"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const course_schema_1 = require("./schemas/course.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CourseService = class CourseService {
    courseModel;
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async create(createCourseDto) {
        return await this.courseModel.create({
            name: createCourseDto.name,
            description: createCourseDto.description,
            level: createCourseDto.level,
            price: createCourseDto.price,
        });
    }
    async findAll() {
        return await this.courseModel.find().exec();
    }
    async findOne(id) {
        return await this.courseModel.findById({ _id: id }).exec();
    }
    async update(id, updateCourseDto) {
        return await this.courseModel.findByIdAndUpdate({ _id: id }, updateCourseDto, { new: true }).exec();
    }
    async remove(id) {
        return await this.courseModel.findByIdAndDelete({ _id: id }).exec();
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(course_schema_1.Course.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CourseService);
//# sourceMappingURL=course.service.js.map