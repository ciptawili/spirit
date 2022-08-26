import { faker } from '@faker-js/faker';
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as RegisterPage from '../pageObject/Register_page'
import * as AccountPage from '../pageObject/Account_page'
import base from "../step_definitions/common/base_function";

When (`User register with valid data`, () => {
    RegisterPage.RegisterPage.fillRegisterData(faker.name.fullName(),faker.internet.email(),'123456')
    RegisterPage.RegisterPage.clickButtonSubmit()
})

When (`User register with data name {string}, email {string}, password {string}`, (name,email,password) => {
    RegisterPage.RegisterPage.fillRegisterData(name,email,password)
    RegisterPage.RegisterPage.clickButtonSubmit()
})

Then (`Success register`, () => {
    base.assertTextContains('Lengkapi Profil')
    AccountPage.AccountPage.editProfilePageAfterRegisterIsDisplayed()
})
