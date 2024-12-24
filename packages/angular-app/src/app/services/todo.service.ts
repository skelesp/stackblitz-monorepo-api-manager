import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { apiRegistry } from '@monorepo/shared';
import { 
  GetTodoOutput,
  CreateTodoOutput,
  DeleteTodoOutput 
} from '@monorepo/shared/dist/api/todo/types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private electronService: ElectronService) {}

  getTodo(todoId: string): Promise<GetTodoOutput> {
    return this.electronService.invoke(apiRegistry.todo.get.channel, { todoId });
  }

  createTodo(title: string): Promise<CreateTodoOutput> {
    return this.electronService.invoke(apiRegistry.todo.create.channel, { title });
  }

  deleteTodo(todoId: string): Promise<DeleteTodoOutput> {
    return this.electronService.invoke(apiRegistry.todo.delete.channel, { todoId });
  }
}