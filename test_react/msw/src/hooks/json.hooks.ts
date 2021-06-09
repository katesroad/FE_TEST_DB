import { useQuery, UseQueryResult } from 'react-query'
import axios from 'axios'
import { IToDo } from '../types'

/**
 * Get todo by todo ID
 * @param id{number} the todo id
 * @returns todo{ITodo|null}
 */
export function useGetTodo(id: number): UseQueryResult<IToDo | null> {
  const queryFn = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.data as IToDo)
  }
  const queryKey = ['todos', id]
  return useQuery({ queryFn, queryKey })
}

// Get to do list
export function useGetTodoList(): UseQueryResult<IToDo[] | null> {
  const queryFn = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.data as IToDo)
  }
  const queryKey = ['todos']
  return useQuery({ queryFn, queryKey })
}
