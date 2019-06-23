import { Controller, Get, Req, Query, Headers, Param, Post, Body, HttpException, HttpStatus, ForbiddenException, UseFilters } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './provider/demo/demo.service';
import { DemoFilter } from '../../core/filters/demo.filter';

@Controller('posts')
@UseFilters(DemoFilter)
export class PostsController {
    //private readonly demoService;

    constructor(private readonly demoService:DemoService){
       //this.demoService=demoService;
    }

    @Get()
    index(){
      return this.demoService.findAll();
    }

    @Get(`:id`)
    show(@Param() params){
        return{
            title:`Post ${params.id}`
        }
    }

    @Post()
    
    store(@Body() post:CreatePostDto){
        //this.demoService.create(post);
        //throw new HttpException('access is unavailable',HttpStatus.FORBIDDEN)
        throw new ForbiddenException('Cant access')
    }
}
