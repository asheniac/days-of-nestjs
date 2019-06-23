import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './provider/demo/demo.service';

@Controller('posts')
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
        this.demoService.create(post);
    }
}
