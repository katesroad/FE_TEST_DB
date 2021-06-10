// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { handlers } from './mocks/handlers'

const server = setupServer(...handlers)

/**
 * Setup the node server enviorment for testingg purpose
 * Setup here is to avoid bug mentioned at this link: https://github.com/mswjs/msw/issues/397
 */
if (process.env.NODE_ENV === 'test') {
  beforeAll(() => server.listen())
  afterAll(() => server.close())
}
