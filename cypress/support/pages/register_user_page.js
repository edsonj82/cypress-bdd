///<reference types="cypress" />

export default {
    realizeRegister() {
        cy.get('#btnRegister').click()
    },
    
    // fillName(name){
    //     cy.get('#user').type(name)
    // },

    checkErrorMessage(message) {
        cy.get('#errorMessageFirstName').should('have.text', message)
    }
}