import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Electron Angular Demo</h1>
      
      <section>
        <h2>User</h2>
        <button (click)="getUser()">Get User</button>
      </section>

      <section>
        <h2>Post</h2>
        <button (click)="createPost()">Create Post</button>
      </section>

      <section>
        <h2>Todo</h2>
        <button (click)="getTodo()">Get Todo</button>
        <button (click)="createTodo()">Create Todo</button>
        <button (click)="deleteTodo()">Delete Todo</button>
      </section>
      
      <pre>{{ result | json }}</pre>
    </div>
  `,
})
export class AppComponent {
  result: any = null;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private todoService: TodoService
  ) {}

  async getUser() {
    this.result = await this.userService.getUser('123');
  }

  async createPost() {
    this.result = await this.postService.createPost(
      'Test Post',
      'Content here',
      '123'
    );
  }

  async getTodo() {
    this.result = await this.todoService.getTodo('123');
  }

  async createTodo() {
    this.result = await this.todoService.createTodo('New Todo');
  }

  async deleteTodo() {
    this.result = await this.todoService.deleteTodo('123');
  }
}