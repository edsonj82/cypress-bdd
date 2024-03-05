///<reference types="cypress" />

export default {
    realizeRegister() {
        cy.get('#btnRegister').click()
    },

    fillName(name) {
        cy.get('#user').type(name)
    },

    fillEmail(email) {
        cy.get('#email').type(email)
    },

    fillPassword(password) {
        cy.get('#password').type(password)
    },

    checkErrorMessage(message) {
        cy.get('#errorMessageFirstName').should('have.text', message)
    },

    checkSuccessMessage(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}