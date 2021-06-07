# Test user-custom react hooks

**About**: Test user-customized react hooks

- Content covered
  - Testing hooks customized by [react-query](https://react-query.tanstack.com/)
  - Testing user customized hooks

## Testing user customized hook

- render hooks:

  - https://github.com/testing-library/react-hooks-testing-library
  - [Why renderHook works in the way we use it](https://epicreact.dev/modules/testing-react-apps/testing-custom-hooks-intro)
    - [Testing with context and a custom render method](https://github.com/kentcdodds/testing-react-apps/blob/main/src/__tests__/exercise/07.md)
    - [Testing custom hooks](https://github.com/kentcdodds/testing-react-apps/blob/main/src/__tests__/exercise/08.md)

- [Testing hooks customized by react-query](https://react-query.tanstack.com/)

  - [Mock axios with jest and typescript](https://stackoverflow.com/questions/51275434/cannot-get-jest-typescript-axios-test) <br/>
    Mocking axios in jest using typescript has slight difference compared with using javascript.

  ```typescript
  import axios from 'axios'

  jest.mock('axios', () => ({
    get: jest.fn(),
  }))

  const mockedAxios = axios as jest.Mocked<typeof axios>
  ```

- **CAUTION** <br/>
  set _catch_ for promise results in error won't be triggered inside the react-query result
