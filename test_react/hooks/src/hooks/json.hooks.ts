import { useQuery } from 'react-query'
import axios from 'axios'

export function useGetTodo(id: number) {
  const queryFn = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.data)
      .catch((e) => null)
  }
  const queryKey = ['todos', id]
  return useQuery({ queryFn, queryKey })
}
