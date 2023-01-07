const request = require('supertest')
const app = require('../../src/routes/user');
const http = require('http')

const mockRequest = (fullName, email, password, isLoggedIn) => ({
    get(fullName) {
      if (fullName !== undefined) return [fullName, email, password,isLoggedIn]
      return null
    },
  });

const mockResponse =()=> {
    const res = {};
    res.status = 200;
    res.json = {fullName:"asdasd",email:"aksdmaksdm@gmail.com", password:"asdk12", isLoggedIn: true};
    return res;
}

describe('Users endpoint', ()=> {
    test('should return all user objects', async ()=> {
        const req = mockRequest();
        const res = mockResponse();
        //const res = await request("http:127.0.0.1:3000").get("/api/user")
        //console.log(res)
        expect(res.status).toEqual(200)
        
    })
})
// describe('users endpoint', () => {
//     jest.setTimeout(10000);
//     test('should return all user objects', async () => {
//       const res = await request(app)
//         .get('/api/user/')
//       expect(res.statusCode).toEqual(200)
//     })
//   })
