import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Object[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.fetch().subscribe( (result: Object[]) => {
      this.posts = result.slice(0, 5);
    });
  }

}
