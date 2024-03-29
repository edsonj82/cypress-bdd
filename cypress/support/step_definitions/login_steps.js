//tranformar o gherkin em metodo / ação
///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import 'cypress-mochawesome-reporter/cucumberSupport';


const email = 'eduardo@gmail.com'
const password = '123456'

Given("I am login screen", () => {
    home_page.acessLogin()
})

Given("I fill e-mail", () => {
    login_page.fillEmail(email)
})

Given("I fill my credentials", () => {
    login_page.fillEmail(email)
    login_page.fillPassword(password)
})

When("I click on login", () => {
    login_page.realizeLogin()
})

Then("I see the message {string}", (message) => {
    login_page.checkErrorMessage(message)
})

Then("I see success message", () => {
    login_page.checkSuccessMessage(email)
})
