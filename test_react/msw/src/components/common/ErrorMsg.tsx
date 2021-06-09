import * as React from 'react'
// eslint-disable-next-line
import styled from 'styled-components/macro'

export const ErrorMsg: React.FC = ({ children }) => {
  return (
    <div
      css={`
        color: red;
      `}
    >
      {children}
    </div>
  )
}
