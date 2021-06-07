import { useQuery } from 'react-query'
import axios from 'axios'
import { IToDo } from '../types'

export function useGetTodo(id: number) {
  const queryFn = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.data as IToDo)
  }
  const queryKey = ['todos', id]
  return useQuery({ queryFn, queryKey })
}
