import request from 'supertest';
import chai from "chai";
import app from '../app.js';
import User from '../models/user.js';
import getToken from './utils.js';
import { before } from 'mocha';


const { expect } = chai;



describe('Test the auth endpoints', () => {

  it('should allow to create users', async () => {
    const payload = {
      'name': 'teast',
      'email': 'josae@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app).post('/auth/register').send(payload);
    expect(status).to.equal(201);

    // check the userId
    expect(body).to.have.property('userId');
    const userId = body.userId;
    const user = await User.findByPk(userId);
    expect(user.name).to.equal(payload.name);
  });

  it('should return 400 if payload is incomplete', async () => {
    const payload = {
      'name': 'teast',
      'password': '123456'
    }
    const { status } = await request(app).post('/auth/register').send(payload);
    expect(status).to.equal(400);
  });

  it('should return 400 if password is shorter than 6 characters', async () => {
    const payload = {
      'name': 'teast',
      'email': 'josa123e@email.com',
      'password': '12345'
    }
    const { body, status } = await request(app).post('/auth/register').send(payload);
    expect(status).to.equal(400);
    expect(body.message).contains('password must be at least 6 characters');
  });

  it('should return 400 if email does not have an @ character', async () => {
    const payload = {
      'name': 'teast',
      'email': 'josa123e.email.com',
      'password': '12345123123'
    }
    const { body, status } = await request(app).post('/auth/register').send(payload);
    expect(status).to.equal(400);
    expect(body.message).contains('email must contain @ character');
  });

  it('should allow to login', async () => {
    const payload = {
      'email': 'josae@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(200);
  });

  it("should fail if email is not incorrect", async () => {
    const payload = {
      'email': 'unexsitedEmail@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(404);
    expect(body.message).contains('No user found with email');
  });

  it("should fail if password is not incorrect", async () => {
    const payload = {
      'email': 'josae@email.com',
      'password': 'badPassword'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(401);
    expect(body.message).contains('Invalid Password');
  });
});
/*
describe('Auth - Test', () => {
  
  describe('Check 201 y que sea objeto', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({
          username: 'test',
          email: 'test@gmail.com',
          password: 'test',
        });
      expect(res.statusCode).to.equal(201);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('token');


      });
    });
  });





*/










/*
// the user name should be at least 3 characters long
describe('GET /user', () => {
  let token;
  let user1;


  before(async () => {
    //create an user
    token = await getToken();
    user1 = await User.create({
      name: 'test'
    });
  });

 it ('should retrive a user', async () => {
  const {body, status} = await request(app)
  .get('/auth/register')
  .set('Authorization', `Bearer ${token}`);
  expect(status).to.equal(404);
 // expect(body).to.have.property('name');
  expect(body.name).to.equal('test');
  });
});

*/






/*
export const register = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).send({
        message: "email, password and name are required"
      });
    }

    if (req.body.password.length < 6) {
      return res.status(400).send({
        message: "password must be at least 6 characters"
      });
    }

    if (!req.body.email.includes('@')) {
      return res.status(400).send({
        message: "email must contain @ character"
      });
    }

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    res.status(201).json({
      "message": "User Created",
      "userId": user.id
    });
  } catch (err) {
    console.log(err);
  }
}





*/



