import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as LoginPage from '../pageObject/login_page'
import * as HomePage from '../pageObject/Home_page'
import base from "../step_definitions/common/base_function";

When (`User login with email {string} and password {string}`, (email,password) => {
    LoginPage.LoginPage.loginWithEmailAndPassword(email,password)
    base.addWaitTime(3)
})

When (`User login with email {string} and blank password`, (email) => {
    LoginPage.LoginPage.inputEmail(email)
    LoginPage.LoginPage.clickSubmitLogin()
})


Then (`Login Success`, () => {
    HomePage.HomePage.homePageAfterLoginDisplayed()
    HomePage.HomePage.clickIconProfile()
})

Then (`Show message error {string}`, (message) => {
    base.assertTextContains(message)
})
