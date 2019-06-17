import { Injectable } from '@nestjs/common';
import { PostsController } from 'dist/posts/posts.controller';

@Injectable()
export class DemoService {
    private readonly posts:Post[]=[]
}
