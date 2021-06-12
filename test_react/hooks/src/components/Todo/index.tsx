import * as React from 'react'
import { useGetTodo } from '../../hooks/json.hooks'

export const Todo: React.FC<{ id: number }> = ({ id }) => {
  const { isError, isSuccess, isLoading, data } = useGetTodo(id)
  if (isLoading) return <p aria-label="loading">loading...</p>
  if (isError) return <p role="alert">failed to load todo</p>
  if (isSuccess) {
    return (
      <div>
        <h4>{data?.title}</h4>
        <p>ID: ${data?.id}</p>
        <p>Completed: {data?.completed ? 'yes' : 'no'}</p>
      </div>
    )
  }
  return null
}
