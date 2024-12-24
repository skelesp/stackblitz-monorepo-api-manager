import { ApiEndpoint } from '../types';
import { GetUserInput, GetUserOutput } from './types';

export const userApiRegistry = {
  get: {
    channel: 'user.get',
    input: {} as GetUserInput,
    output: {} as GetUserOutput,
  },
} as const;

export type UserApiRegistry = {
  [K in typeof userApiRegistry[keyof typeof userApiRegistry]['channel']]: ApiEndpoint<
    typeof userApiRegistry[keyof typeof userApiRegistry]['input'],
    typeof userApiRegistry[keyof typeof userApiRegistry]['output']
  >;
};