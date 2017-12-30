import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostsService } from '../shared/posts/posts.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  private postsLimit = 5;
  posts$;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAllPosts({query: {
      limitToFirst: this.postsLimit
    }})
      .publishReplay().refCount();
  }

  nextPosts(){
    this.posts$ = this.posts$.switchMap(posts => {
      const startAt = posts[posts.length-1].$key;
      return this.postService.loadNextPage(startAt, this.postsLimit);
    });
  }

  prevPosts(){
    this.posts$ = this.posts$.switchMap(posts => {
      const startAt = posts[0].$key;
      return this.postService.loadPreviousPage(startAt, this.postsLimit);
    });
  }
}
