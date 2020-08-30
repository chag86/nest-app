import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../models/category.model';

@Controller('categories')
export class CategoryController {
    constructor(
        @InjectRepository(Category)
        private userRepo: Repository<Category> //Generico
    ){}

    @Get()
    async index(): Promise<Category[]>{
        return this.userRepo.find(); 
    }

    @Get(':id')
    show(@Param('id') id: string):Promise<Category>{
        return this.userRepo.findOneOrFail(id);
    }

    @Post()
    async store(@Body() body: Category): Promise<Category>{
        const user = this.userRepo.create(body);
        return this.userRepo.save(user);
        
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body:Category): Promise<Category>{
        await this.userRepo.findOneOrFail(id);
        this.userRepo.update({id: +id},body);
        return await this.userRepo.findOneOrFail(id);
        
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id: string): Promise<void>{ //204 - No content
        await this.userRepo.findOneOrFail(id);
        this.userRepo.delete({id: +id});
        
    }
}
