import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post : any;
  constructor(private route: ActivatedRoute, private postService: PostService) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(post => this.post = post);
  }
}
