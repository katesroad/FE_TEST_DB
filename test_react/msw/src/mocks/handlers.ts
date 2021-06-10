import { rest } from 'msw'
import { TODO_LIST } from './data'

const isProd = process.env.NODE_ENV === 'production' ? true : false
const API_HOST = isProd
  ? process.env.REACREACT_APP_API_URL
  : 'http://localhost:3000'

const getUrl = (path: string) => `${API_HOST}/${path}`

// Start the Mock Service Worker

export const handlers = [
  rest.get(getUrl('todos'), (req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        data: TODO_LIST,
      })
    )
  }),
  rest.get(getUrl('todos/:id'), (req, res, ctx) => {
    const { id } = req.params
    // the standard usage of response
    // Doc: https://mswjs.io/docs/api/response#standard-usage
    if (isNaN(+id)) {
      return res(
        ctx.status(400),
        ctx.json({ ok: false, msg: 'Please provide an valid todo id.' })
      )
    }
    const todo = TODO_LIST.find((todo) => todo.id === +id)
    const status = todo ? 200 : 404
    const data = {
      data: todo,
      msg: todo ? undefined : `Can't find a todo with id#${id}`,
      ok: todo ? true : false,
    }
    return res(ctx.status(status), ctx.json(data))
  }),
]
