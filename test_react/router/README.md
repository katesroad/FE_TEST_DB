# Testing components that require routes

- [Testing guide of React-Router](https://reactrouter.com/web/guides/testing)

## Examples

- [ErrorBoundaryProvider](./src/components/ErrorBoundary):

  - render _Link_ wrapped by _MemoryRouter_
  - Provide initial entries by

  ```ts
  <MemoryRouter initialEntries={[{ pathname }]}>
    <ErrorBoundaryProvider>{ui}</ErrorBoundaryProvider>
  </MemoryRouter>
  ```

- [Test navigation](https://reactrouter.com/web/guides/testing/navigating)

- [Check location in test](https://reactrouter.com/web/guides/testing/checking-location-in-tests)
