import axios from 'axios';

export default {
  register(username, password){
    return axios.post('https://fastapi-jwt-server.herokuapp.com/register', {
      username: username,
      password: password,
      role: 'user'
    }).then((res) => {
      return res.data
    })
  },
  authenticate(username, password){
    return axios.post('https://fastapi-jwt-server.herokuapp.com/authenticate', {
      username: username,
      password: password
    }).then((res) => {
      return res.data
    })
  },
  delete(username, password){
    return axios.post('https://fastapi-jwt-server.herokuapp.com/delete', {
      username: username,
      password: password
    }).then((res) => {
      return res.data
    })
  }
}
