
const express = require('express')
const app = express()
const { products } = require('./data')





app.listen(5000, () => {
    console.log('server is blah blah 5000...');
})




// app.get('/', (req, res) => {
//     res.send('<h1>home page</h1> <a href="/api/products">Products</a>')
// })

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product) => {
//         const { id, name, image } = product;
//         return { id, name, image };
//     })
//     res.json(newProducts)
// })

// app.get('/api/products/:productID', (req, res) => {
//     const { productID } = req.params;

//     const singleProduct = products.find((product) =>
//         product.id === Number(productID));
//     if (!singleProduct) {
//         res.status(404).send("not here sowwy")
//     }
//     return res.json(singleProduct)
// })

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//     console.log(req.params)
//     res.send('hello world')
//   })

