export interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CommentResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
