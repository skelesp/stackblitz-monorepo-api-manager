import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { apiRegistry } from '@monorepo/shared';
import { GetUserOutput } from '@monorepo/shared/dist/api/user/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private electronService: ElectronService) {}

  getUser(userId: string): Promise<GetUserOutput> {
    return this.electronService.invoke(apiRegistry.user.get.channel, { userId });
  }
}