import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import TodoScreen from '../screens/todo.screen'

const client = new QueryClient({
  defaultOptions: { queries: { retry: 0 } },
})

const renderTodoScreen = (pathname: string) => {
  return render(
    <MemoryRouter initialEntries={[{ pathname }]}>
      <QueryClientProvider client={client}>
        <Switch>
          <Route component={TodoScreen} path="/todos/:id" />
        </Switch>
      </QueryClientProvider>
    </MemoryRouter>
  )
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
  await waitForElementToBeRemoved(screen.getByText(/Loading/i))
  expect(container).toMatchSnapshot()
})
