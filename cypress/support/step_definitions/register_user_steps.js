//tranformar o gherkin em metodo / ação
///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_user_page from "../pages/register_user_page"
import 'cypress-mochawesome-reporter/cucumberSupport';

const name = 'Edson'
const email = 'edson.jose@xpto.com'
const password = '123456'

Given("I am on register screen", () => {
    home_page.acessRegister()
})

Given("I fill name", () => {
    register_user_page.fillName(name)
})

Given("I fill email", () => {
    register_user_page.fillEmail(email)
})

Given("I fill an email invalid", () => {
    register_user_page.fillEmail(name)
})

Given("I fill password", () => {
    register_user_page.fillPassword(password)
})

Given("I fill password invalid", () => {
    register_user_page.fillPassword(name)
})

Given("I fill my datas of register", () => {
    register_user_page.fillName(name)
    register_user_page.fillEmail(email)
    register_user_page.fillPassword(password)
})

When("I click on Register", () => {
    register_user_page.realizeRegister()

})

Then("I see message {string}", (message) => {
    register_user_page.checkErrorMessage(message)
})

Then("I see message success", () => {
    register_user_page.checkSuccessMessage(name)
})