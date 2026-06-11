# BookStore Api DemoQA

Projeto de automação de testes de API utilizando Javascript ao uso de Node.js, Jest e Axios.

## Pré-requisitos

Antes de executar o projeto, é necessário instalar:

* Node.js
* NPM (instalado juntamente com o Node.js)

Para verificar se a instalação foi realizada com sucesso, insira no Terminal da IDE:

Inserir no terminal da IDE:
node -v
npm -v


## Inicialização do projeto

Criar o arquivo package.json:

Inserir no terminal:
npm init -y


## Instalação das dependências

### Jest

Framework utilizado para execução dos testes.

Inserir no terminal:
npm install --save-dev jest


### Axios

Biblioteca utilizada para realizar as requisições HTTP.

Inserir no terminal:
npm install axios


## Configuração do package.json

Adicionar o script de execução dos testes, no arquivo package.json, inserir a seguinte informação:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Estrutura do projeto

```text
project
│
├── services
│   ├── AccountService.js
│   └── BookStoreService.js
│
├── tests
│   └── bookstore.test.js
│
├── utils
│   └── apiClient.js
│
├── package.json
└── README.md
```

## Execução dos testes

Executar todos os testes:

Inserir no terminal:
npm test


Executar um arquivo específico:

Inserir no terminal:
npx jest tests/bookstore.test.js

## Cenários automatizados

* Criação de usuário
* Geração de token
* Autorização de usuário
* Consulta de livros disponíveis
* Reserva de livros
* Consulta de detalhes do usuário
* Validação dos livros reservados

## Tecnologias utilizadas

* Node.js
* Jest
* Axios
* API DemoQA BookStore
