const path = require('path')
const express = require('express')


expressApp =  function () {
  const app = express()
  // const indexPath = path.join(__dirname, '/../dist/index.html')
  // const publicPath = express.static(path.join(__dirname, '/../dist'))

  // app.use('/', publicPath)
  // app.get('/*', function (_, res) { res.sendFile(indexPath) })
  app.use(express.static(path.resolve(__dirname, '..', 'dist')));

  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });

  return app
}

const port = (process.env.PORT || 8080)
const app = expressApp()

// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack')
//   const webpackDevMiddleware = require('webpack-dev-middleware')
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   const config = require('../webpack.dev.config.js')
//   const compiler = webpack(config)

//   app.use(webpackHotMiddleware(compiler))
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }))
// }

app.listen(port)
console.log(`Listening at http://localhost:${port}`)