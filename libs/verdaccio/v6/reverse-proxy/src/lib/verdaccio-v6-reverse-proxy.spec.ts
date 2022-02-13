import { verdaccioV6ReverseProxy } from './verdaccio-v6-reverse-proxy';

describe('verdaccioV6ReverseProxy', () => {
  it('should work', () => {
    expect(verdaccioV6ReverseProxy()).toEqual('verdaccio-v6-reverse-proxy');
  });
});
