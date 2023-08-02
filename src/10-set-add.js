const list = new Set()

list.add('1')
list.add('2').add('3')

console.log(list.has('1'))

const lista = [1, 1, 1, 3, 4, 5, 6, 7, 8]
const noRepeatList = [...new Set(lista)]
console.log(noRepeatList)
