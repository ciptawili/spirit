/// <reference types="cypress" />

import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import base from './base_function'
class baseSetUrl{
    /**
     * SET STORES AND PAGES URL (STAGING)
     */

    // RANCH MARKET PONDOK INDAH
    static setVisitUrlHomePage(){
        cy.visit('https://sehatq.com/')
    }

    static setVisitLoginPage(){
        cy.visit('https://account.sehatq.com/login/')
    }

    static setVisitRegisterPage(){
        cy.visit('https://account.sehatq.com/daftar/email')
    }

    static setVisitProfileMenu(){
        cy.visit('https://www.sehatq.com/profil/912170/detail/edit')
    }

}

Given(`Open SehatQ home page`, () => {
    baseSetUrl.setVisitUrlHomePage()
})

Given(`Open SehatQ login page`, () => {
    baseSetUrl.setVisitLoginPage()
})

Given(`Open SehatQ register page`, () => {
    baseSetUrl.setVisitRegisterPage()
})

Given(`Open SehatQ profile page`, () => {
    baseSetUrl.setVisitProfileMenu()
})

export default baseSetUrl