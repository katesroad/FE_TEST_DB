import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import TodoScreen from '../screen/todo.screen'

const client = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
})

test('render <TodoScreen />', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={[{ pathname: '/todos/1' }]}>
      <QueryClientProvider client={client}>
        <Switch>
          <Route component={TodoScreen} path="/todos/:id" />
        </Switch>
      </QueryClientProvider>
    </MemoryRouter>
  )
  expect(screen.getByText(/Loading/i)).toBeInTheDocument()

  await waitForElementToBeRemoved(screen.getByText(/Loading/i))
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="Todo___StyledDiv-sc-5e6tjb-0 cmvIFh"
      >
        <h4>
          delectus aut autem
        </h4>
        <p>
          Completed: 
          No
           
        </p>
      </div>
    </div>
  `)
})
