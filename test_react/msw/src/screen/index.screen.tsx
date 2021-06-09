import * as React from 'react'
import { Loading } from '../components/common/Loading'
import { ErrorMsg } from '../components/common/ErrorMsg'
import { useGetTodoList } from '../hooks/json.hooks'
import { IToDo } from '../types'
import { Todo } from '../components/common/Todo'
import { Link } from 'react-router-dom'

export default function HomeScreen() {
  const { status, data } = useGetTodoList()

  return (
    <div>
      <h2>Task List</h2>
      {['loading', 'idel'].includes(status) ? (
        <Loading />
      ) : status === 'success' ? (
        <ul>
          {data?.map((todo: IToDo) => {
            return (
              <li key={todo.id}>
                <Link to={`/todo/${todo.id}`}>
                  <Todo {...todo} />
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <ErrorMsg>Failed to load todo list.</ErrorMsg>
      )}
    </div>
  )
}
