
const express = require('express')
// const path = require('path')
const app = express();



app.listen(5000, () => {
    console.log('server is blah blah 5000...');
})




// app.use(express.static('./public'))

// app.all('*', (req, res) => {
//     res.status(404)
//     .send('Sowwy not found')
// });

// app.get('/', (req, res) => {
    //     res.status(200)
    //         .sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    // });

// app.get('/about', (req, res) => {
//     res.status(200)
//     .send('About Page')
// });





// const http = require('http');
// const {readFileSync} = require('fs');

// const homePage = readFileSync('./index.html')
// // const homePage = readFileSync('./navbar-app/index.html')
// const homeStyle = readFileSync('./navbar-app/styles.css')
// const homeLogo = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')


// const server = http.createServer((req, res) => {
//     const url = req.url
//     // home page
//     if (url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write(homePage)
//         res.end()
//     }
//     // about page
//     else if (url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>About Page</h1>')
//         res.end()
//     }
//     // // style
//     // else if (url === '/styles.css') {
//     //     res.writeHead(200, { 'content-type': 'text/css' })
//     //     res.write(homeStyle)
//     //     res.end()
//     // }
//     // // Logo
//     // else if (url === '/logo.svg') {
//     //     res.writeHead(200, { 'content-type': 'image/svg+xml' })
//     //     res.write(homeLogo)
//     //     res.end()
//     // }
//     // // logic
//     // else if (url === '/browser-app.js') {
//     //     res.writeHead(200, { 'content-type': 'text/javascript' })
//     //     res.write(homeLogic)
//     //     res.end()
//     // }
//     // if nothing found
//      else {
//         res.writeHead(404, { 'content-type': 'text/html' })
//         res.write('<h1> Sowwy, error, page not found </h1>')
//         res.end()
//     }
// });

// server.listen(5000)

