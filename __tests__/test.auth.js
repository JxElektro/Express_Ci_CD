import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import User from '../models/user.js';
import getToken from './utils.js';
import { before } from 'mocha';

const { expect } = chai;

// test that always pass
describe('Test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

/*
// test that always fail
describe('Test', () => {
    it('should fail', () => {
        expect(true).to.equal(false);
    });
});*/