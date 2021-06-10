# MSW for API mocking

Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests. Usually, people use it in testing and debuging purpose.

## Mocking Rule

At least make sure the data schema to be identical.

## MSW

- Runing at client side for mocking: [**Start worker**](https://mswjs.io/docs/getting-started/integrate/browser#start-worker)

  - Code

  ```tsx
  // src/index.js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import App from './App'

  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
  }
  ReactDOM.render(<App />, document.getElementById('root'))
  ```

  - [Trouble shooting](https://mswjs.io/docs/getting-started/integrate/browser#troubleshooting)

- Runing at server side for testing: **Start server**

- Use cookie for authentication: https://mswjs.io/docs/recipes/cookies

## References

- [what is msw](https://mswjs.io/)
- [what is service worker](https://developers.google.com/web/fundamentals/primers/service-workers)
