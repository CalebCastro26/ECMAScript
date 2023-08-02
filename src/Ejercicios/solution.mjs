import { getData } from './api.mjs'

async function solution() {
  return getData()
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

solution()
