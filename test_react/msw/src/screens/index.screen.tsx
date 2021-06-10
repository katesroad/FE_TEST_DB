import * as React from 'react'
import { Loading } from '../components/common/Loading'
import { ErrorMsg } from '../components/common/ErrorMsg'
import { useGetTodoList } from '../hooks/todo.hooks'
import { IToDo } from '../types'
import { Todo } from '../components/common/Todo'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import styled from 'styled-components/macro'

export default function HomeScreen() {
  const { status, data } = useGetTodoList()

  return (
    <div>
      <h2>Task List</h2>
      {['loading', 'idel'].includes(status) ? (
        <Loading />
      ) : status === 'success' ? (
        <ul
          css={`
            list-style: none;
            margin: 0;
            padding: 0;
            a {
              color: inherit;
              text-decoration: none;
            }
          `}
        >
          {data?.map((todo: IToDo) => {
            return (
              <li key={todo.id}>
                <Link to={`/todos/${todo.id}`}>
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
