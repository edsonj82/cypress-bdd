Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login with empty email field
        Given I am login screen
        When I click on login
        Then I see the message "E-mail inválido."


    Scenario: Login with empty password field
        Given I am login screen
        And I fill e-mail
        When I click on login
        Then I see the message "Senha inválida."

    # credentials = email and password
    Scenario: Login successfully
        Given I am login screen
        And I fill my credentials
        And I fill password
        When I click on login
        Then I see success message