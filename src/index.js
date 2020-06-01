const http = require('http')

const server = http.createServer(((req, res) => {
    res.end('<h1><center>Hello world</center></h1>')
}))

server.listen(8081, () => { 
    console.log('Server has been started')
})