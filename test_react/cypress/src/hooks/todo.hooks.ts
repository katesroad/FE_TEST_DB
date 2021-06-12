import { useQuery, UseQueryResult } from 'react-query'
import axios, { AxiosResponse } from 'axios'
import { IToDo } from '../types'

const getUrl = (path: string) => `${process.env.REACT_APP_API_URL}/${path}`

const getData = (res: AxiosResponse) => res.data

/**
 * Get todo by todo ID
 * @param id{number} the todo id
 * @returns todo{ITodo|null}
 */
export function useGetTodo(id: number): UseQueryResult<IToDo | null> {
  const queryFn = () =>
    axios.get(getUrl(`todos/${id}`)).then((res) => getData(res))
  const queryKey = ['todos', id]
  return useQuery({ queryFn, queryKey })
}

// Get to do list
export function useGetTodoList(): UseQueryResult<IToDo[] | null> {
  const queryFn = () => axios.get(getUrl(`todos`)).then((res) => getData(res))
  const queryKey = ['todos']
  return useQuery({ queryFn, queryKey })
}
