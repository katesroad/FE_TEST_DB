import * as React from 'react'
// eslint-disable-next-line
import styled from 'styled-components/macro'
import { IToDo } from '../types'

export const Todo: React.FC<IToDo> = ({ children, ...todo }) => {
  return (
    <div
      css={`
        padding: 1rem;
        border-radius: 0.25rem;
      `}
    >
      <h4>{todo?.title}</h4>
      <p>Completed: {todo.completed ? 'Yes' : 'No'} </p>
    </div>
  )
}
