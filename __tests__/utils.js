import request from 'supertest';
import app from '../app1.js';

async function getToken() {
  const payload = {
    email: 'test@test.com',
    password: 'test1234'
  };
  const {body} = await request(app).post('/auth/login').send(payload);
  return body.accesstoken;
}

  export default getToken;
