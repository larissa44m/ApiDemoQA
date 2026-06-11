const AccountService = require('../services/AccountService');
const BookStoreService = require('../services/BookStoreService');

jest.setTimeout(30000);

describe('BookStore Challenge', () => {

  it(
    'criar usuário, gerar token, mostrar usuário autorizado, reservar dois livros e validar reserva',
    async () => {

      const userName = `user${Date.now()}`;
      const password = 'Teste@123';

      const createUserResponse =
        await AccountService.createUser(
          userName,
          password
        );

      expect(createUserResponse.status).toBe(201);
      expect(createUserResponse.data.userID).toBeDefined();

      const userId =
        createUserResponse.data.userID;

      const tokenResponse =
        await AccountService.generateToken(
          userName,
          password
        );

      expect(tokenResponse.status).toBe(200);
      expect(tokenResponse.data.token).toBeDefined();

      const token =
        tokenResponse.data.token;

      const authResponse =
        await AccountService.authorized(
          userName,
          password
        );

      expect(authResponse.status).toBe(200);
      expect(authResponse.data).toBe(true);

      const booksResponse =
        await BookStoreService.getBooks();

      expect(booksResponse.status).toBe(200);
      expect(booksResponse.data.books).toBeDefined();

      expect(
        booksResponse.data.books.length
      ).toBeGreaterThan(1);

      const isbn1 =
        booksResponse.data.books[0].isbn;

      const isbn2 =
        booksResponse.data.books[1].isbn;

      const reserveBooksResponse =
        await BookStoreService.reserveBooks(
          userId,
          token,
          isbn1,
          isbn2
        );

      expect(
        reserveBooksResponse.status
      ).toBeGreaterThanOrEqual(200);

      expect(
        reserveBooksResponse.status
      ).toBeLessThan(300);

      const userDetailsResponse =
        await AccountService.getUserDetails(
          userId,
          token
        );

      expect(
        userDetailsResponse.status
      ).toBe(200);

      expect(
        userDetailsResponse.data.userId
      ).toBe(userId);

      expect(
        userDetailsResponse.data.username
      ).toBe(userName);

      expect(
        userDetailsResponse.data.books
      ).toBeDefined();

      expect(
        userDetailsResponse.data.books.length
      ).toBe(2);

      expect(
        userDetailsResponse.data.books
      ).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            isbn: isbn1
          }),
          expect.objectContaining({
            isbn: isbn2
          })
        ])
      );

    }
  );

});