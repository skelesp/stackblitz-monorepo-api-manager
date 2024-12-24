import { userApiRegistry, UserApiRegistry } from './user/registry';
import { postApiRegistry, PostApiRegistry } from './post/registry';
import { todoApiRegistry, TodoApiRegistry } from './todo/registry';

export const apiRegistry = {
  user: userApiRegistry,
  post: postApiRegistry,
  todo: todoApiRegistry,
} as const;

export type AppApiRegistry = UserApiRegistry & PostApiRegistry & TodoApiRegistry;