import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import App from '../App'

const renderTodoScreen = (pathname: string) => {
  window.history.pushState('', '', pathname)
  return render( <App />)
}

test('render <TodoScreen />, load data successfully', async () => {
  const { container } = renderTodoScreen('/todos/1')
  expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  await waitForElementToBeRemoved(screen.getByText(/Loading/i))
  expect(container).toMatchSnapshot()
})

test('render <TodoScreen />, load data failed', async () => {
  // there is no todo with an id of 2000 at the mocking service
  const { container } = renderTodoScreen('/todos/2000')
  expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  await waitForElementToBeRemoved(screen.getByText(/Loading/i), {timeout: 15000})
  expect(container).toMatchSnapshot()
})
