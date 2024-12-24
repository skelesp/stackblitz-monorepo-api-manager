export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface GetTodoInput {
  todoId: string;
}

export type GetTodoOutput = Todo;

export interface CreateTodoInput {
  title: string;
}

export type CreateTodoOutput = Todo;

export interface DeleteTodoInput {
  todoId: string;
}

export type DeleteTodoOutput = {
  success: boolean;
};