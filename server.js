const Koa = require('koa')
const Router = require('koa-router')
const render = require('koa-ejs')
const static = require('koa-static')
const mongoose = require('mongoose')
const path = require('path')
const pckg = require('./package.json')
const config = require('./config')

/* Middlewares */
const main = require('./server/main')

const app = new Koa()
const router = new Router()

mongoose.connect(config.mongodb)
mongoose.connection.on('error', console.error.bind(console, `Please check your mongo connection: ${config.mongodb}`))
mongoose.connection.once('open', console.info.bind(console, `Is it connected to mongo at: ${config.mongodb}`))

render(app, {
  root: path.join(__dirname, 'server/views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
})

app.use(static('public/js'))
app.use(static('public/css'))

app.use(async function (ctx, next) {
  try {
    return await next()
  } catch (err) {
    if (ctx.header['content-type'] === 'application/json') {
      ctx.type = 'application/json'
      ctx.status = +(err.status)
      ctx.body = {
        message: err.message
      }
    }
  }
})

router
  .get('/', main.render)

app
  .use(router.routes())
  .use(router.allowedMethods())

if (module.parent) {
  module.exports = app
} else {
  mongoose.connection.once('open', () => {
    router
      .get('/', main.render)

    server
      .use(router.routes())
      .use(router.allowedMethods())


    server.listen(config.port, function () {
      console.info('process.env.NODE_ENV', process.env.NODE_ENV)
      console.info('version', pckg.version)
      console.info(JSON.stringify(config))
    })

    console.info.bind(console, `Is it connected to mongo at: ${config.mongodb}`)
  })
}
