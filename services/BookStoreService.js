const api = require('../utils/apiClient');

class BookStoreService {

  async getBooks() {

    const response =
      await api.get('/BookStore/v1/Books');

    return response;
  }

  async reserveBooks(userId, token, isbn1, isbn2) {

    const response =
      await api.post(
        '/BookStore/v1/Books',
        {
          userId,
          collectionOfIsbns: [
            { isbn: isbn1 },
            { isbn: isbn2 }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

    console.log('Informações dos livros reservados:');
    console.log(response.data);

    return response;
  }

}

module.exports = new BookStoreService();