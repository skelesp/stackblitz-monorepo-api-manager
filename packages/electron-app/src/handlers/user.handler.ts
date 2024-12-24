import { GetUserInput, GetUserOutput } from '@monorepo/shared/dist/api/user/types';

export async function getUserHandler(input: GetUserInput): Promise<GetUserOutput> {
  return {
    name: 'John Doe',
    email: 'john@example.com'
  };
}