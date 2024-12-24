import { CreatePostInput, CreatePostOutput } from '@monorepo/shared/dist/api/post/types';

export async function createPostHandler(input: CreatePostInput): Promise<CreatePostOutput> {
  return {
    id: '123',
    createdAt: new Date().toISOString()
  };
}