import axios from 'axios';

const logins = {};

export default config => {
  return {
    register(username, password) {
      if (config.mockResources) {
        if (logins[username]) {
          return {
            ok: false,
            error: 'Username already registered'
          };
        }
        logins[username] = password;
        return {
          ok: true
        };
      }
      return axios
        .post('https://fastapi-jwt-server.herokuapp.com/register', {
          username,
          password,
          role: 'user'
        })
        .then(res => {
          return res.data;
        });
    },
    authenticate(username, password) {
      if (config.mockResources) {
        if (logins[username] == password) {
          return {
            ok: true,
            jwt: 'mocktoken'
          };
        }
        return {
          ok: false
        };
      }
      return axios
        .post('https://fastapi-jwt-server.herokuapp.com/authenticate', {
          username,
          password
        })
        .then(res => {
          return res.data;
        });
    },
    delete(username, password) {
      if (config.mockResources) {
        if (logins[username] == password) {
          delete logins[username];
          return {
            ok: true
          };
        }
        return {
          ok: false
        };
      }
      return axios
        .post('https://fastapi-jwt-server.herokuapp.com/delete', {
          username,
          password
        })
        .then(res => {
          return res.data;
        });
    }
  };
};
