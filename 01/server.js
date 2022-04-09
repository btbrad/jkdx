const http = require('http')

const app = http.createServer((request, response) => {
  let body = []
  request.on('error', () => {
    console.error(err)
  }).on('data', chunk => {
    body.push(chunk.toString())
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log('body', body)
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('Hello World\n')
  })
})
app.listen(8000, () => {
  console.log('Server is running at http://localhost:8000\n')
})
