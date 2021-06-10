import { useQuery, UseQueryResult } from 'react-query'
import axios from 'axios'
import { IToDo } from '../types'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(
  (res) => {
    try {
      const { data, ok, msg } = res.data
      if (ok) return data
      else return Promise.reject(msg || 'unknown error')
    } catch (e) {
      return Promise.reject(e)
    }
  },
  (e: unknown) => Promise.reject(e)
)

/**
 * Get todo by todo ID
 * @param id{number} the todo id
 * @returns todo{ITodo|null}
 */
export function useGetTodo(id: number): UseQueryResult<IToDo | null> {
  const queryFn = () => axios.get(`todos/${id}`)
  const queryKey = ['todos', id]
  return useQuery({ queryFn, queryKey })
}

// Get to do list
export function useGetTodoList(): UseQueryResult<IToDo[] | null> {
  const queryFn = () => axios.get(`todos`)
  const queryKey = ['todos']
  return useQuery({ queryFn, queryKey })
}
