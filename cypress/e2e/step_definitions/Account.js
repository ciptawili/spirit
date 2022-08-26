import { faker } from '@faker-js/faker';
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as AccountPage from '../pageObject/Account_page'
import * as HomePage from '../pageObject/Home_page'
import base from "../step_definitions/common/base_function";

When (`User open menu edit profile`, () => {
    // HomePage.HomePage.clickIconProfile()
    // HomePage.HomePage.clickMenuProfile()
    AccountPage.AccountPage.clickButtonEdit()
})

When (`User edit profile with valid data`, () => {
    AccountPage.AccountPage.fillEditProfileData(faker.name.firstName(),'1'+faker.random.numeric(2),faker.random.numeric(2),faker.address.street())
    AccountPage.AccountPage.clickButtonSubmit()
})

When (`User edit profile with valid data name {string}, height {string}, weight {string}, phone {string}, address {string}`, (name,height,weight,phone,address) => {
    AccountPage.AccountPage.fillEditProfileData2(name,height,weight,phone,address)
    AccountPage.AccountPage.clickButtonSubmit()
})

Then (`Success edit profile`, () => {
    base.assertTextContains('Edit profile berhasil')
})
