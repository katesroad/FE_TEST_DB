import request from 'supertest';
import app from '../src/app';

test('request not found path', (done) => {
  request(app).get('/404').send().expect(404, done);
});
