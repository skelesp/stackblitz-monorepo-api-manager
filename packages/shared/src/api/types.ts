export type ApiEndpoint<TInput, TOutput> = {
  input: TInput;
  output: TOutput;
};

export type ApiRegistry = {
  [K: string]: ApiEndpoint<any, any>;
};