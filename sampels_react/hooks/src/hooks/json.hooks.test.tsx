import { renderHook } from '@testing-library/react-hooks'
import { useGetTodo } from './json.hooks'
import { QueryClientProvider, QueryClient } from 'react-query'
import axios from 'axios'

jest.mock('axios', () => ({
  get: jest.fn(),
}))

// https://stackoverflow.com/questions/51275434/cannot-get-jest-typescript-axios-test
const mockedAxios = axios as jest.Mocked<typeof axios>

const client = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
})
const Wrapper: React.FC = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

beforeEach(() => {
  client.clear()
  jest.clearAllMocks()
})

test('useGetToDo gets data successfully', async () => {
  const toDoId = 1
  const todo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  }
  mockedAxios.get.mockResolvedValueOnce({ data: todo })
  const { result, waitFor } = renderHook(() => useGetTodo(toDoId), {
    wrapper: Wrapper,
  })

  await waitFor(() => result.current.isFetched)
  expect(result.current.data).toEqual(todo)
})

test('useGetToDo gets data failed', async () => {
  jest.clearAllMocks()
  client.clear()

  const toDoId = 1
  mockedAxios.get.mockRejectedValueOnce({ error: 'Bad request' })
  const { result, waitFor } = renderHook(() => useGetTodo(toDoId), {
    wrapper: Wrapper,
  })

  await waitFor(() => result.current.isFetched)
  expect(result.current.isSuccess).toBeFalsy()
})
