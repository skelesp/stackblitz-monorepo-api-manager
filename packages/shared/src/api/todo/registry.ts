import { ApiEndpoint } from '../types';
import { 
  GetTodoInput, GetTodoOutput,
  CreateTodoInput, CreateTodoOutput,
  DeleteTodoInput, DeleteTodoOutput 
} from './types';

export const todoApiRegistry = {
  get: {
    channel: 'todo.get',
    input: {} as GetTodoInput,
    output: {} as GetTodoOutput,
  },
  create: {
    channel: 'todo.create',
    input: {} as CreateTodoInput,
    output: {} as CreateTodoOutput,
  },
  delete: {
    channel: 'todo.delete',
    input: {} as DeleteTodoInput,
    output: {} as DeleteTodoOutput,
  },
} as const;

export type TodoApiRegistry = {
  [K in typeof todoApiRegistry[keyof typeof todoApiRegistry]['channel']]: ApiEndpoint<
    typeof todoApiRegistry[keyof typeof todoApiRegistry]['input'],
    typeof todoApiRegistry[keyof typeof todoApiRegistry]['output']
  >;
};