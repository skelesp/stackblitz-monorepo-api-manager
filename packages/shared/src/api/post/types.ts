export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
}

export interface CreatePostInput {
  title: string;
  content: string;
  authorId: string;
}

export type CreatePostOutput = Pick<Post, 'id' | 'createdAt'>;