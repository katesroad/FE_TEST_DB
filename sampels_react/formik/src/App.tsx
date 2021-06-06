import React from 'react'
import { LoginForm } from './components/LoginForm'
import { IUser } from './types'

const handleSubmit = (values: IUser) => {
  console.log(values)
}

export default function App() {
  return <LoginForm onSubmit={handleSubmit} />
}
