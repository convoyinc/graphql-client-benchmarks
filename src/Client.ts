import { FragmentId, SingleExample, SingleRawExample } from './Example';

export interface GraphQLError {}

export interface ReadResult<TData extends object = object> {
  data: TData;
  errors?: GraphQLError[];
}

export interface Observer<TData extends object = object> {
  unsubscribe(): void;
  mostRecentResult(): ReadResult<TData> | null;
}

export interface ClientMetadata {
  name: string;
}

export interface ClientConstructor<TClient extends Client = Client> {
  metadata: ClientMetadata;
  new (): TClient;
}

export abstract class Client {
  abstract transformRawExample(rawExample: SingleRawExample): SingleExample;
  abstract read(example: SingleExample): Promise<ReadResult>;
  abstract readFragment(example: SingleExample, id: FragmentId): Promise<ReadResult>;
  abstract write(example: SingleExample): Promise<void>;
  abstract observe(example: SingleExample): Observer;
}
