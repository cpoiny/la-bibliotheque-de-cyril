import { Post } from "../post.model";

export interface User {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    role: string;
    token: string;
  }
  
  
  export interface UserLogin {
    message: string;
    token : string,
  }

  export interface ApiResponsePost {
    status: string,
    data : Post
  }