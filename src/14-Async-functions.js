const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Funcion Asincrona'), 2000)
      : reject('Error en todo')
  })
}

/* Antes */
// fnAsync()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

const getData = async (numeracion) => {
  try {
    let resultado = await fnAsync()
    console.log(numeracion)
    console.log(resultado)
  } catch (error) {
    console.error(error)
  }
}

console.log('Antes')
getData('Primero')
getData('Segundo')
console.log('Despues')
