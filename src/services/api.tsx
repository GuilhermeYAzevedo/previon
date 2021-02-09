import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://previon-api-dev.azurewebsites.net',
});

export default instance;
