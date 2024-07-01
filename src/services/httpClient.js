import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export default httpClient;
