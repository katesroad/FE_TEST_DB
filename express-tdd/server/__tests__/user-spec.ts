import request from 'supertest';
import app from '../src/app';
import faker from 'faker';

const user = {
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe('user registeration', () => {
  it('register an user(POST /api/1.0/users/register)', (done) => {
    console.log(user);
    request(app)
      .post('/api/1.0/users/register')
      .send(user)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        if (res) done();
      });
  });
});
