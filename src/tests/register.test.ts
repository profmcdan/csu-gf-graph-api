// import { startServer } from '..';
import { request } from 'graphql-request';
import { host } from '../constants';
import { createConnection } from 'typeorm';
import { User } from '../entity/User';

const email = 'bob@bob.com';
const password = 'password123';

const mutation = `
  mutation register{
    register(email: ${email}, password: ${password})
  }
`;

test('Register User Successful', async () => {
  const response = await request(host, mutation);
  expect(response).toEqual({ register: true });
  await createConnection();
  const users = await User.find({ where: { email } });
  const user = users[0];
  expect(user.email).toEqual(email);
  expect(user.password).not.toEqual(password);
});

// TODO:
// Use a test database
// drop all database after the test is run
// run the server when the test run
// set up a before hook prior to the test to manage most of the dirty codes above
