import { rest } from 'msw'
import { TODO_LIST } from './data'

// Start the Mock Service Worker

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    ctx.json({
      ok: true,
      data: TODO_LIST,
    })
  }),
  rest.get('/todos:id', (req, res, ctx) => {
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
    return res(
      ctx.status(200),
      ctx.json({
        data: todo,
        ok: true,
      })
    )
  }),
]
