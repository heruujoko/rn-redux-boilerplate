import network from '../helpers/network'

export function login(data) {
  return new Promise((resolve, reject) => {
    network.post('login', data).then(res => {
      resolve(res)
    })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  login: login
}