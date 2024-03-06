# 1 - criar meu cenario
Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am login screen

    Scenario: Login with empty email field
        When I click on login
        Then I see the message "E-mail inválido."

    Scenario: Login with empty password field
        And I fill e-mail
        When I click on login
        Then I see the message "Senha inválida."

    # # credentials = email and password
    Scenario: Login successfully
        And I fill my credentials
        When I click on login
        Then I see success message