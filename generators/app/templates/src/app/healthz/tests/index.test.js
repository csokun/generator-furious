const { createTestServer } = require('~infra/test');

const plugin = require('../index');

describe('healthz', () => {
  let server;

  beforeEach(() => {
    server = createTestServer({ plugins: [ plugin ]});
  });

  it('should be able to probe healthz', async () => {
    const response = await server.inject({ method: 'GET', url: '/healthz' });
    expect(JSON.parse(response.body)).toEqual({ message: 'alive!' });
  });
})