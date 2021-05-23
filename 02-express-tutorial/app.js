const http = require('http')


const server = http.createServer((req, res) => {
    const url = req.url
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-trype': 'html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-trype': 'html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // if nothing found
     else {
        res.writeHead(404, { 'content-trype': 'html' })
        res.write('<h1> Sowwy, error, page not found </h1>')
        res.end()
    }
});



server.listen(5000)

