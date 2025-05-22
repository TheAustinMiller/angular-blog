import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() : void {
    this.postService.getPosts().subscribe(posts => { console.log(posts); this.posts = posts });
  }
}


