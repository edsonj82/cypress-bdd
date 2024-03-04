Feature: Register user
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am on register screen

    Scenario: Campo nome vazio
        # Given I am on register screen
        When I click on Register
        Then I see message "E-mail inválido." on register

    Scenario: campo e-mail vazio
        # Given I am on register screen
        And I fill name
        When I click on Register
        Then I see message "O campo e-mail deve ser preenchido corretamente" on register

    Scenario: campo e-mail invalido
        # Given I am on register screen
        And I fill name
        When I click on Register
        Then I see message "O campo e-mail deve ser preenchido corretamente" on register


    Scenario: campo senha vazio
        # Given I am on register screen
        And I fill name
        And I fill e-mail "eduardo@gmail.com"
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 digitos" on register

    Scenario: campo senha invalido
        # Given I am on register screen
        And I fill name
        And I fill e-mail "eduardo@gmail.com"
        And I fill password "123"
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 digitos" on register


    Scenario: cadastro de usuario com sucesso
        # Given I am on register screen
        And I fill my datas of register
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 digitos" on register
