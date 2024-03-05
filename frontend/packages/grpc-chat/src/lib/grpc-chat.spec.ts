import { grpcChat } from './grpc-chat';

describe('grpcChat', () => {
  it('should work', () => {
    expect(grpcChat()).toEqual('grpc-chat');
  });
});
