import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/interfaces/post.interface';

@Injectable()
export class DemoService {
    private readyonly posts:Post[]=[];

    findAll():Post[]{
        return this.posts;
    }

    create(post:Post){
        this.posts.push(post);
    }
}
