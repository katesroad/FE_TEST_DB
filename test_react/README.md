# README

**About**: Testing React Application/Components/Hooks.

## Concepts

- Test runners, Mocking, Assertion, Mocking rendering surface([jsdom](https://github.com/jsdom/jsdom))
- Unit Testing, Integration Testing and E2E testing

## Testing overview

- [React Testing Overview](https://reactjs.org/docs/testing.html)
- [Testing Recipes](https://reactjs.org/docs/testing-recipes.html)
- [jsdom](https://github.com/jsdom/jsdom)

## comparison

- Jest vs mocha

[If you’re writing a library that tests mostly browser-specific behavior, and requires native browser behavior like layout or real inputs, you could use a framework like mocha.](https://reactjs.org/docs/testing-environments.html#mocking-a-rendering-surface)

- [Enzyme](https://enzymejs.github.io/enzyme/)

  [For React versions <= 16, the Enzyme library makes it easy to assert, manipulate, and traverse your React Components’ output.](https://reactjs.org/docs/test-utils.html#overview)

## References

- [ReactTestUtils](https://reactjs.org/docs/test-utils.html)
  Provided some utils used for Rreact testing.

- [Test Renderer](https://reactjs.org/docs/test-renderer.html)

  - Usage: This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or jsdom. It is kinda similar to enzyme. Test Renderer provides the solution to code details.

  - [Shallow rendering in React](https://reactjs.org/docs/shallow-renderer.html)

**Shallow rendering** lets you render a component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.

- [react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils)

- [Enzyme](https://enzymejs.github.io/enzyme/)

- Tool list

  - assertion and faking

  - [Mocha](https://mochajs.org/)
  - [Chai](https://www.chaijs.com/)
  - [Sion](https://sinonjs.org/)
  - [Jest](https://jestjs.io/docs)

  - React Testing
  - [Enzyme](https://enzymejs.github.io/enzyme/)
  - [React-addons-test-utils](https://github.com/facebook/react#readme)
  - [ReactTestUtils](https://reactjs.org/docs/test-utils.html)
  - [React-Testing-libraries](https://testing-library.com/docs/react-testing-library/intro/)
  - [Jest](https://jestjs.io/)
