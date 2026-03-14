import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) { }
  async create(createCourseDto: CreateCourseDto) {
    return await this.courseModel.create({
      name: createCourseDto.name,
      description: createCourseDto.description,
      level: createCourseDto.level,
      price: createCourseDto.price,
    });
  }

  async findAll() {

    return await this.courseModel.find().exec(); }

  async findOne(id: string) {
    return await this.courseModel.findById({ _id: id }).exec();
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.courseModel.findByIdAndUpdate({ _id: id }, updateCourseDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.courseModel.findByIdAndDelete({ _id: id }).exec();
  }
}
