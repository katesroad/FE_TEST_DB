import { renderHook } from '@testing-library/react-hooks'
import { useGetTodo } from './todo.hooks'
import { QueryClientProvider, QueryClient } from 'react-query'
import axios from 'axios'
import { cleanup } from '@testing-library/react'
import { TODO_LIST } from '../mocks/data'

jest.mock('axios', () => ({
  get: jest.fn(),
  default: jest.fn().mockRejectedValueOnce({}),
}))

// https://stackoverflow.com/questions/51275434/cannot-get-jest-typescript-axios-test
const mockedAxios = axios as jest.Mocked<typeof axios>

const client = new QueryClient({
  defaultOptions: { queries: { retry: 0 } },
})
const Wrapper: React.FC = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

beforeEach(() => {
  cleanup()
  client.clear()
  jest.clearAllMocks()
})

test('useGetToDo gets data successfully', async () => {
  const toDoId = 1
  const todo = TODO_LIST[1]
  mockedAxios.get.mockResolvedValueOnce({ data: todo })
  const { result, waitFor } = renderHook(() => useGetTodo(toDoId), {
    wrapper: Wrapper,
  })

  await waitFor(() => result.current.isFetched)
  expect(result.current.data).toEqual(todo)
})

test('useGetToDo gets data failed', async () => {
  const toDoId = TODO_LIST[0].id
  mockedAxios.get.mockRejectedValueOnce(null)
  const { result, waitFor } = renderHook(() => useGetTodo(toDoId), {
    wrapper: Wrapper,
  })
  await waitFor(() => result.current.isFetched)
  expect(result.current.isError).toBeTruthy()
})
