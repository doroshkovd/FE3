import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./models/post";
import { PostService } from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];
  isLoading = false;
  error: any = null;

  constructor(private postServise: PostService) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.isLoading = true;
    this.postServise.addPost(postData).subscribe((data) => {
        this.isLoading = false;
      });
  }

  onFetchPosts() {
    this.isLoading = true;
    this.error = null;
    this.postServise.getAllPosts('2').subscribe((data: Post[]) => {
        this.loadedPosts = data;
        this.isLoading = false;
      });
  }

  onGetPost(id: string) {
    this.postServise.getPost(id)
      .subscribe((data) => console.log(data));
  }

  onUpdatePost(post: Post, index: number) {
    const newPost = {
      title: `New title ${post.id}`,
      content: `New content ${post.id}`,
    };

    this.postServise.updatePost(newPost, post.id)
      .subscribe((data: Post) => {
        this.loadedPosts[index].content = data.content;
        this.loadedPosts[index].title = data.title;
      });
  }

  onDeletePost(id: string, index: number) {
    this.postServise.deletePost(id)
      .subscribe((data) => {
        this.loadedPosts.splice(index, 1);
      });
  }
}
