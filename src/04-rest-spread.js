//arrays destructuring
let fruits = ['Apple', 'Banana']
let { 1: b } = fruits
console.log(b)

let person = { name: 'Caleb', age: 27 }
let country = 'PE'

let data = { id: 1, ...person, country }
console.log(data)

///rest
function sum(num, ...values) {
  console.log(values)
  console.log(num + values[0])
  values.forEach((val) => {
    console.log(val + num)
  })
  //return num + values[0]
}

sum(1, 2, 3, 4, 5, 6)
