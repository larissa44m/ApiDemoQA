const axios = require('axios');

const api = axios.create({
  baseURL: 'https://demoqa.com'
});

module.exports = api;