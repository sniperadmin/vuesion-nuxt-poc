const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

var Bugsnag = require('@bugsnag/js')
var BugsnagPluginExpress = require('@bugsnag/plugin-express')

Bugsnag.start({
  apiKey: '3bf6b1423a81f7d8786dc86e8f4da590',
  plugins: [BugsnagPluginExpress]
})

var middleware = Bugsnag.getPlugin('express')

app.use(middleware.requestHandler)

process.env.DEBUG = 'nuxt:*'

// Import and Set Nuxt.js options
const config = require('../nuxt.config.ts')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

  app.use(middleware.errorHandler)
}
start()
