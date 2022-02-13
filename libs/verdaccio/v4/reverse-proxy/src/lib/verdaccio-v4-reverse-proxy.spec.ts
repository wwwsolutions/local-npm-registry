import { verdaccioV4ReverseProxy } from './verdaccio-v4-reverse-proxy';

describe('verdaccioV4ReverseProxy', () => {
  it('should work', () => {
    expect(verdaccioV4ReverseProxy()).toEqual('verdaccio-v4-reverse-proxy');
  });
});
