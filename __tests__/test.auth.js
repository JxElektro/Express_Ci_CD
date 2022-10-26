import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import User from '../models/user.js';
import getToken from './utils.js';
import { before } from 'mocha';

const { expect } = chai;

describe('Auth', () => {
    before(async () => {
        // create user
        
        const payload = {
            'name': 'test',
            'email': 'test@gmail.com',
            'password': 'test1234'
        }
        await request(app).post('/auth/register').send(payload);
    });

    it('should register a user', async () => {
        const payload = {
            'name': 'test',
            'email': 'test@gmail.com',
            'password': 'test1234'
        }
        const res = await request(app).post('/auth/register').send(payload);
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('token');
    });

});
