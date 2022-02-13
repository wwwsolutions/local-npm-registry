import { verdaccioV5ReverseProxy } from './verdaccio-v5-reverse-proxy';

describe('verdaccioV5ReverseProxy', () => {
  it('should work', () => {
    expect(verdaccioV5ReverseProxy()).toEqual('verdaccio-v5-reverse-proxy');
  });
});
