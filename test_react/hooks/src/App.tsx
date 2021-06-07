import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Todo } from './components/Todo'

const client = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})
function App() {
  return (
    <QueryClientProvider client={client}>
      <Todo id={1} />
    </QueryClientProvider>
  )
}

export default App
