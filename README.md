# Testes de Web com Cypress com BDD

Este repositório contém testes de Web utilizando o framework Cypress. Os testes foram desenvolvidos para validar o comportamento da aplicação via Web em diferentes cenários (criação e listagem) e garantir sua integridade e funcionalidade.

Ao decorrer do desenvolvimento dos testes, houve uma implementação de testes com BDD utilizando a linguagem Gherkin para escrever os comportamentos da aplicação, configuração de relatórios com Mochawesome e por fim, configurando o projeto dentro de uma pipeline com cypress cloud e github actions.

## 🔖 Requisitos funcionais

### Register user

- [X] Register with empty name field
- [X] Register with empty e-mail field
- [X] Register with invalid e-mail
- [X] Register with empty password field
- [X] Register with invalid password
- [X] Register successfully

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| nome     | nome do usuário                       | texto    | sim         |
| e-mail   | e-mail do usuário                     | texto    | sim         |
| senha    | senha do usuário                      | texto    | sim         |
| cadastrar| cadastrar                             | botão    |             |

### Login

- [X] Login with empty email field
- [X] Login with empty password field
- [X] Login successfully

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| e-mail   | e-mail do usuário                     | texto    | sim         |
| senha    | senha do usuário                      | texto    | sim         |
| login    | login                                 | botão    |             |

## Requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

## Configuração

1. Clone este repositório para sua máquina local:

```
git@github.com:edsonj82/cypress-bdd.git
```

2. Navegue até o diretório do projeto:

```
cd cypress-bdd
```

3. Instale as dependências do projeto:

```
npm install
npm install cypress
npx cypress install --force
```

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```
npx cypress open
```

Isso abrirá a interface do Cypress, onde você poderá selecionar os testes que deseja executar.

## Estrutura do Projeto

- **cypress/e2e**: Contém os arquivos de teste escritos em JavaScript usando o framework Cypress.
- **cypress/support**: Contém arquivos de suporte, como comandos personalizados ou configurações globais.
- **cypress/fixtures**: Contém dados estáticos para serem utilizados nos testes.
- **cypress/reports**: Contém dados com métricas dos testes escritos.

## Contribuindo

Sinta-se à vontade para contribuir com novos testes, melhorias ou correções de bugs. Basta fazer um fork deste repositório, fazer suas alterações e enviar um pull request.

## Recursos Adicionais

Para mais informações sobre o framework Cypress, consulte a [documentação oficial](https://docs.cypress.io/).
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md)
- [Cypress Mochawesome Reporter](https://github.com/LironEr/cypress-mochawesome-reporter)

## Atribuições

Agradecimentos especiais a Eduardo Finotti e Hebert Soares pelo desenvolvimento e manutenção da aplicação para a realização do estudos de testes que foram desenvolvidos pela QAzando.