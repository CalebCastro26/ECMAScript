const button = document.getElementById('btn')

button.addEventListener('click', async function () {
  const module = await import('./23-module.js')
  console.log(module)
  module.hello()
})
