import { rest } from 'msw'
import { TODO_LIST } from './data'

const API_HOST = process.env.REACT_APP_API_URL

const getUrl = (path: string) => `${API_HOST}/${path}`

// Start the Mock Service Worker

export const handlers = [
  rest.get(getUrl('todos'), (req, res, ctx) => {
    return res(ctx.json(TODO_LIST))
  }),
  rest.get(getUrl('todos/:id'), (req, res, ctx) => {
    const { id } = req.params
    // the standard usage of response
    // Doc: https://mswjs.io/docs/api/response#standard-usage
    if (isNaN(+id)) {
      return res(ctx.status(400), ctx.json(null))
    }
    const todo = TODO_LIST.find((todo) => todo.id === +id)
    const status = todo ? 200 : 404
    return res(ctx.status(status), ctx.json(todo))
  }),
]
