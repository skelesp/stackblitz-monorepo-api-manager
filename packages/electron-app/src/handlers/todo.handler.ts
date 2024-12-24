import { 
  GetTodoInput, GetTodoOutput,
  CreateTodoInput, CreateTodoOutput,
  DeleteTodoInput, DeleteTodoOutput
} from '@monorepo/shared/dist/api/todo/types';

export async function getTodoHandler(input: GetTodoInput): Promise<GetTodoOutput> {
  return {
    id: input.todoId,
    title: 'Sample Todo',
    completed: false,
    createdAt: new Date().toISOString()
  };
}

export async function createTodoHandler(input: CreateTodoInput): Promise<CreateTodoOutput> {
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: input.title,
    completed: false,
    createdAt: new Date().toISOString()
  };
}

export async function deleteTodoHandler(input: DeleteTodoInput): Promise<DeleteTodoOutput> {
  return {
    success: true
  };
}