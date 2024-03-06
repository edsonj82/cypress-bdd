Feature: Register user
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am on register screen

    Scenario: Login with empty name field
        When I click on Register
        Then I see message "O campo nome deve ser prenchido"

    Scenario: Login with empty e-mail field
        And I fill name
        When I click on Register
        Then I see message "O campo e-mail deve ser prenchido corretamente"

    Scenario: Login with invalid e-mail
        And I fill name
        And I fill an email invalid
        When I click on Register
        Then I see message "O campo e-mail deve ser prenchido corretamente"

    Scenario: Login with empty password field
        And I fill name
        And I fill email
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Login with invalid password
        And I fill name
        And I fill email
        And I fill password invalid
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Register successfully
        And I fill my datas of register
        When I click on Register
        Then I see message success
