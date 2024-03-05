//tranformar o gherkin em metodo / ação
///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_user_page from "../pages/register_user_page"

const name = 'Edson José'
const email = 'edson.jose@xpto.com'

Given("I am on register screen", () => {
    home_page.acessRegister()
})

Given("I fill name", () => {
    register_user_page.fillName(name)
})

Given("I fill email invalid", () => {
    register_user_page.fillEmail(name)
})

When("I click on Register", () => {
    register_user_page.realizeRegister()

})

Then("I see message {string}", (message) => {
    register_user_page.checkErrorMessage(message)
})