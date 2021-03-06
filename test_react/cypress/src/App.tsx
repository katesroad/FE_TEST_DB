import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/index.screen'
import TodoScreen from './screens/todo.screen'

const client = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/todos/:id" exact component={TodoScreen} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
