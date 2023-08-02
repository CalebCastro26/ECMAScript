function* iterador(arr) {
  for (let value of arr) {
    yield value
  }
}

const it = iterador(['Caleb', 'Castro', 'Perez'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)
