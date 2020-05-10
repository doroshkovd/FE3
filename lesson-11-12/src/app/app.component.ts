import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./models/post";
import { PostService } from "./services/post.service";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];

  constructor(private postServise: PostService, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.storage.ref('гигиена.png')
      .getDownloadURL().subscribe((data) => console.log(data) )
  }

  onFileChange(event) {
    const file = event.target.files[0];
    const filePath = 'pdf/some.pfd';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.then((data) => console.log(data));
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postServise.addPost(postData).subscribe((data) => {
        console.log(data);
      });
  }

  onFetchPosts() {
    this.postServise.getAllPosts('2').subscribe((data: Post[]) => {
        this.loadedPosts = data;
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
