import request from 'supertest';
import app from '../src/app';
import faker from 'faker';
import { sequelize } from '../src/config/database';

const user = {
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

// to make sure tables to be created
beforeEach(async () => {
  await sequelize.sync({ force: true });
});

// to make sure tables to be cleaned
afterEach(async () => {
  await sequelize.truncate({ force: true });
});

describe('user registeration', () => {
  it('register an user(POST /api/1.0/users/register)', (done) => {
    request(app)
      .post('/api/1.0/users/register')
      .send(user)
      .expect(200)
      .then(({ body: record }) => {
        expect(record.username).toBe(user.username);
        done();
      })
      .catch((e) => {
        done(e);
      });
  });
});
