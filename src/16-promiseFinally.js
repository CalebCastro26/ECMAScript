const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve('hey!!'), 5000)
    } else {
      reject('whooooops!')
    }
  })
}

anotherFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log('Ya hemos terminado mano'))
