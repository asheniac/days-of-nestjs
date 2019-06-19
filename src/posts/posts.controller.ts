import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './provider/demo/demo.service';

@Controller('posts')
export class PostsController {
    private readonly demoService;

    constructor(demoService:DemoService){
       this.demoService=demoService;
    }

    @Get()
    index(@Headers() headers){
        console.log(headers)
        return [{
            title:'hello~'
        }]
    }

    @Get(`:id`)
    show(@Param() params){
        return{
            title:`Post ${params.id}`
        }
    }

    @Post()
    store(@Body() post:CreatePostDto){
        console.log(post.title)
    }
}
