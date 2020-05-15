import { Injectable } from '@angular/core';
import { Blog } from '../bloglist/model/Bloghub';
import { blogs } from '../bloglist/model/bloglist';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:Blog[]
  constructor() { 
    this.blogs= blogs
  }
  addBlog(blog:Blog)
  {
    let id= this.blogs.length+1;
    blog.id=id;
    this.blogs.unshift(blog);
    console.log(this.blogs)
  }
}
