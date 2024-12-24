import { ApiEndpoint } from '../types';
import { CreatePostInput, CreatePostOutput } from './types';

export const postApiRegistry = {
  create: {
    channel: 'post.create',
    input: {} as CreatePostInput,
    output: {} as CreatePostOutput,
  },
} as const;

export type PostApiRegistry = {
  [K in typeof postApiRegistry[keyof typeof postApiRegistry]['channel']]: ApiEndpoint<
    typeof postApiRegistry[keyof typeof postApiRegistry]['input'],
    typeof postApiRegistry[keyof typeof postApiRegistry]['output']
  >;
};