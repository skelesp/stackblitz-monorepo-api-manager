import { AppApiRegistry, apiRegistry } from '@monorepo/shared';
import { getUserHandler } from './user.handler';
import { createPostHandler } from './post.handler';
import { getTodoHandler, createTodoHandler, deleteTodoHandler } from './todo.handler';

export const handlers = {
  [apiRegistry.user.get.channel]: getUserHandler,
  [apiRegistry.post.create.channel]: createPostHandler,
  [apiRegistry.todo.get.channel]: getTodoHandler,
  [apiRegistry.todo.create.channel]: createTodoHandler,
  [apiRegistry.todo.delete.channel]: deleteTodoHandler,
} as const;