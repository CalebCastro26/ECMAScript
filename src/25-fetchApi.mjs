import fetch from 'node-fetch'

const response = await fetch('https://api.escuelajs.co/api/v1/products')
const products = await response.json()

console.log(products)

export default products
