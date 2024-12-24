import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { apiRegistry } from '@monorepo/shared';
import { CreatePostOutput } from '@monorepo/shared/dist/api/post/types';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private electronService: ElectronService) {}

  createPost(title: string, content: string, authorId: string): Promise<CreatePostOutput> {
    return this.electronService.invoke(apiRegistry.post.create.channel, {
      title,
      content,
      authorId
    });
  }
}