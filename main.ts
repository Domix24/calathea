import { Hono } from 'hono'

const app = new Hono()

app.get('/:name{.*}?', (c) => {
  return c.text('Hello ' + (c.req.param('name') || 'Hono')  + '!')
})

export default app
