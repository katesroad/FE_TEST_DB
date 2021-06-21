# Test Notes

## Tools used

- [Mocha](https://mochajs.org/): Test runner
- [Chai](https://www.chaijs.com/): Assertion library
- [Sion](https://sinonjs.org/#get-started): Provide _mock/stub/spy_ type functionality
- [supertest](https://github.com/visionmedia/supertest)

## Concepts

- Testing setup

  - Test runner
  - Assertion Library: Define testing logics and expected outcomes
  - Headless browser: jsdom, Puppeteer

- Unit test

  - We usually don't want anything external(such as database calls) to influence the outcome of tests
  - Test doubles can replace troublesome parts of the code and make tests easier to write

- Spies

  - Definition: Record information about function calls, including number of times called, arguments, return value, this value, exception throws
  - There are two types of spies
    - 1. Anonymous functions
    - 2. Ones that wrap methods in our code

## Tutorials

- [Introduction too Javascript Unit Testing with Chai and Mocha](https://www.youtube.com/watch?v=MLTRHc5dk6s)
- [A higher overview of testing types](https://www.youtube.com/watch?v=r9HdJ8P6GQI&ab_channel=Academind)
