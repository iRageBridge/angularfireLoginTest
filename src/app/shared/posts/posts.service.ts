import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Post } from '../../shared/model/post';
import { FirebaseListFactoryOpts } from 'angularfire2/database-deprecated/interfaces';
import { User } from '../model/user';
//import { User } from '@firebase/auth-types';

@Injectable()
export class PostsService {
  constructor(private af: AngularFireDatabase) { }


  getAllPosts(query: FirebaseListFactoryOpts ={}): Observable<Post[]>{
     return this.af.list('/posts', query)
      .map(Post.fromJsonList)
  }

  loadNextPage(startAt: string, limit = 5){
    return this.getAllPosts({query: {
      orderByKey: true,
      limitToFirst: 5,
      startAt
    }})
  }

  loadPreviousPage(startAt: string, limit = 5){
    return this.getAllPosts({query: {
      orderByKey: true,
      limitToFirst: 5,
      startAt
    }})
  }

  findPostByKey(key): Observable<Post>{
    return this.af.object(`/posts/${key}`);
  }

  findUserByUsername(username: string):Observable<User>{
    return this.af.list('users', {
      query: {
        orderByChild: 'username',
        equalTo: username
      }
    }).map(res=>User.fromArray(res[0]))
      .do(user=>console.log('user: ', user));
  }

  findPostKeysPerUser(userKey:string,
                      query: FirebaseListFactoryOpts): Observable<string[]> {
    return this.af.list(`postsPerUser/${userKey}`, query)
    .map(postKeysPerUser => postKeysPerUser.map(post => post.key$));
  }

  findPostsForPostKeys(postKeys$: Observable<string[]>):Observable<Post[]> {
    return postKeys$
    .map(postKeys$ => postKeys$.map(key => this.findPostByKey(key)))
    .flatMap(fbObj => Observable.combineLatest(fbObj));
  }

  getPostsByUserKey(userKey:string, limit = 5){
    const firstPagePostKeys$ = this.findPostKeysPerUser(userKey, {query: {
      limitToFirst: 3
    }});
    return this.findPostsForPostKeys(firstPagePostKeys$);
  }
}
