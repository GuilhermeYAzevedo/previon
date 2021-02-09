import api from './api';

api.post('https://previon-api-dev.azurewebsites.net/Usuario/Login').then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  },
);
