import axios from 'axios';

const logins = {}

export default (config) => {
  return {
    register(username, password) {
      if(config.mockResources){
        if(logins[username]){
          return {
            ok: false,
            error: 'Username already registered'
          }
        } else {
          logins[username] = password
          return {
            ok: true
          }
        }
      } else {
        return axios
          .post('https://fastapi-jwt-server.herokuapp.com/register', {
            username,
            password,
            role: 'user'
          })
          .then(res => {
            return res.data;
          });
      }
    },
    authenticate(username, password) {
      if(config.mockResources){
        if(logins[username] == password){
          return {
            'ok': true,
            'jwt': 'mocktoken'
          }
        } else {
          return {
            'ok': false
          }
        }
      } else {
        return axios
          .post('https://fastapi-jwt-server.herokuapp.com/authenticate', {
            username,
            password
          })
          .then(res => {
            return res.data;
          });
      }
    },
    delete(username, password) {
      if(config.mockResources){
        if(logins[username] == password){
          delete logins[username]
          return {
            'ok': true
          }
        } else {
          return {
            'ok': false
          }
        }
      } else {
        return axios
          .post('https://fastapi-jwt-server.herokuapp.com/delete', {
            username,
            password
          })
          .then(res => {
            return res.data;
          });
      }
    }
  }
};
