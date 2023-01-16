const request = require('supertest');


describe('Test the wallet post endpoint', () => {
    test('It should return a 200 status code and return if the body contains the wallet', async () => {
      const response = await request('https://bitirme2-production.up.railway.app')
        .post('/api/wallet')
        .send({  // Send the request body as an argument to the .send() method
          walletAddress: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B ',
          owner: 'john@example.com',
        });
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(
        expect.objectContaining({
            walletAddress: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B ',
            owner: 'john@example.com',
        })
      );
    });
  });
  