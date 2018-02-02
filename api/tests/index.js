'use strict';

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

const request = require('request');

describe('Test events', () => {
    it('Тест получения user', (done) => {
        const queryStr = '{users {id}}';
        request.post({
            headers: {'content-type': 'application/json'},
            url: 'http://localhost:3000/api/graphiql?',
            body: JSON.stringify({query: queryStr})
        }, (err, res, body) => {
            const data = JSON.parse(body).data;

            expect(data).to.be.an('object');
            done();
        });
    });
});
