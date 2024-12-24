export interface User {
  name: string;
  email: string;
}

export interface GetUserInput {
  userId: string;
}

export type GetUserOutput = User;