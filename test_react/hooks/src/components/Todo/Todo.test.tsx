import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Todo } from '.'
import * as hooks from '../../hooks/json.hooks'

const client = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})
const Wrapper: React.FC = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

jest.mock('../../hooks/json.hooks', () => ({
  useGetTodo: jest.fn(),
}))

const getTodo = hooks.useGetTodo as jest.Mocked<any>

beforeEach(() => {
  jest.clearAllMocks()
  client.clear()
})

test('render <Todo /> when loading data', async () => {
  getTodo.mockReturnValue({
    isLoading: true,
  })
  const { container } = render(<Todo id={1} />, { wrapper: Wrapper })

  expect(screen.getByText(/loading/i)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('render <Todo /> after getting data successfully', () => {
  const todo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  }
  getTodo.mockReturnValue({ isSuccess: true, data: todo })

  const { container } = render(<Todo id={1} />, { wrapper: Wrapper })

  expect(container).toMatchSnapshot()
})

test('render <Todo /> after getting data failed', async () => {
  getTodo.mockReturnValue({ isError: true })

  const { container } = render(<Todo id={1} />, { wrapper: Wrapper })

  expect(container).toMatchSnapshot()
})
