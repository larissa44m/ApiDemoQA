const api = require('../utils/apiClient');

class AccountService {

  async createUser(userName, password) {

    const response = await api.post('/Account/v1/User', {
      userName,
      password
    });

    console.log('Informações do usuário criado:');
    console.log(response.data);

    return response;
  }

  async generateToken(userName, password) {

    const response = await api.post('/Account/v1/GenerateToken', {
      userName,
      password
    });

    console.log('Informações do token gerado:');
    console.log(response.data);

    return response;
  }

  async authorized(userName, password) {

    const response = await api.post('/Account/v1/Authorized', {
      userName,
      password
    });

    console.log('Informações do usuário autorizado:');
    console.log(response.data);

    return response;
  }

  async getUserDetails(userId, token) {

    const response = await api.get(
      `/Account/v1/User/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log('Detalhes do usuário com livros reservados: Response listada:');
    console.log(response.data);

    return response;
  }

}

module.exports = new AccountService();