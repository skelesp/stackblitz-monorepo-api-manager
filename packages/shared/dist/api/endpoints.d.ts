import { ApiEndpoint } from './types';
export type GetUserInput = {
    userId: string;
};
export type GetUserOutput = {
    name: string;
    email: string;
};
export type CreatePostInput = {
    title: string;
    content: string;
    authorId: string;
};
export type CreatePostOutput = {
    id: string;
    createdAt: string;
};
export type AppApiRegistry = {
    'user.get': ApiEndpoint<GetUserInput, GetUserOutput>;
    'post.create': ApiEndpoint<CreatePostInput, CreatePostOutput>;
};
export declare function isValidChannel(channel: string): channel is keyof AppApiRegistry;
export declare const validChannels: {
    readonly 'user.get': true;
    readonly 'post.create': true;
};
