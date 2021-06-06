import React from 'react'
import * as faker from 'faker'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

test('Render <Form /> submit without filling form', async () => {
  const handleSubmit = jest.fn()
  const { container } = render(<LoginForm onSubmit={handleSubmit} />)

  // Expect formik to match the static content
  expect(container).toMatchSnapshot()

  // Formik updates form state ayschrnously
  await act(async () => {
    await userEvent.click(screen.getByRole('button', { name: /submit/i }))
  })

  // expect form to match snaptshot after rendering errors
  expect(container).toMatchSnapshot()

  // handleSubmit should not be called because form has validation error
  expect(handleSubmit).not.toBeCalled()
})

test('Render <Form /> and submit with valid information', async () => {
  const email = faker.internet.email()
  const pass = faker.internet.password()
  const handleSubmit = jest.fn()
  render(<LoginForm onSubmit={handleSubmit} />)

  await act(async () => {
    /**
     * About delay parameter:
     * options.delay is the number of milliseconds that pass between two characters are typed.
     *  By default it's 0. You can use this option if your component has a different behavior for fast or slow users.
     * If you do this, you need to make sure to await!
     * Doc: https://github.com/testing-library/user-event#typeelement-text-options
     */
    await userEvent.type(screen.getByPlaceholderText(/Enter email/i), email, {
      delay: 1,
    })
    await userEvent.type(screen.getByPlaceholderText(/Enter password/i), pass, {
      delay: 1,
    })
    await userEvent.click(screen.getByRole('button', { name: /submit/i }))
  })

  expect(handleSubmit).toBeCalledWith({ email, password: pass })
  expect(handleSubmit).toBeCalledTimes(1)
})
