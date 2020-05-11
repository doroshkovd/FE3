import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "../models/post";
import { Observable } from "rxjs";
import { ErrorsService } from "../shared/errors/errors.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient, private errorsService: ErrorsService) {
  }

  getAllPosts(limit?: string): Observable<any> {
    let params = new HttpParams();
    if (limit) {
      params = params.set('orderBy', '"title"');
      params = params.set('limitToFirst', limit);
    }
    return this.http.get('https://lesson-d630a.firebaseio.com/posts.json',
      { params, observe: 'body', responseType: 'json' })
      .pipe(
        map((data: HttpEvent<any>) => {
          // if (data.type === HttpEventType.Sent) {
          //   console.log('Sent');
          // }
          // console.log(data);
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({id: key, ...data[key]});
          }
          return posts;
        }),
      );
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`https://lesson-d630a.firebaseio.com/posts/${id}.json`)
      .pipe(
        map((data: Post) => ({id, ...data})),
      );
  }

  addPost(postData: Post): Observable<string> {
    return this.http.post<string>('https://lesson-d630a.firebaseio.com/posts.json', postData);
  }

  updatePost(newPost: Post, id: string): Observable<Post> {
    return this.http.put<Post>(`https://lesson-d630a.firebaseio.com/posts/${id}.json`, newPost);
  }

  deletePost(id): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('apikey', '6576897ujhg6');

    return this.http.delete(`https://lesson-d630a.firebaseio.com/posts/${id}.json`, { headers });
  }
}
