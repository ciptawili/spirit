/// <reference types="cypress" />

import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

/**
 * CONTAINS BASE FUNCTIONS & SELECTORS
 */

export const SELECTOR ={
    BUTTON_HOME_HEADER_SEARCHBAR            :`[id=header-search-bar]`
}

class base{
    /**
     * ADD WAIT TIME
     * @param {input}, add waiting time in seconds 
     */
    static addWaitTime(input){
        cy.wait(input*1000)
    }

    /**
     * ASSERT ELEMENTS CONTAINS SPECIFIC TEXT
     * @param text 
     * @returns 
     */
    static assertTextContains(text){
        (cy.contains(text, {timeout: 10000}).should('exist'))
    }

    /**
     * CLEAR TEXTBOX / TEXT AREA
     * @param {*} element 
     */
    static clearText(element){
        cy.get(element).should('exist')
        .clear()
    }

    static clickText(text){
        cy.contains(text).should('exist').click()
    }

    /**
     * VERIFY & CLICK SELECTED ELEMENT
     * @param element 
     */
    static clickSelectedElement(element){
        cy.get(element, {timeout: 7000})
        .should('exist','be.visible')
        .click({force:true})
    }

    /**
     * VERIFY & CLICK FIRST SELECTED ELEMENT (MULTIPLE DETECTED)
     * @param {*} element 
     */
    static clickFirstSelectedElement(element){
        cy.get(element, {timeout: 7000})
        .first()
        .should('exist','be.visible')
        .click({force:true})
    }

    static clickFirstSelectedElementContains(element, itemname){
        cy.get(element, {timeout: 7000})
        .first()
        .should('exist','be.visible')
        .contains(itemname)
        .click({force:true})
    }

    static clickFirstSelectedElementNoForce(element){
        cy.get(element)
        .first()
        .should('exist', 'be.visible')
        .click()
    }
    
    static clickSelectedElementNoForce(element){
        cy.get(element, {timeout: 7000})
        .should('exist','be.visible')
        .click()
    }

    static clickAndScrollIntoSelectedElement(element){
        cy.get(element, {timeout: 7000})
        .scrollIntoView()
        .should('exist','be.visible')
        .click({force:true})
    }

    static getUserLoginFromFixtures(){
        cy.fixture('staging_users').as('userData')
    }

    /**
     * SCROLL INTO SPECIFIC ELEMENT
     */
    static scrollIntoElement(element){
        cy.get(element)
        .scrollIntoView()
        .should('exist', 'be.visible')
    }
    
    /**
     * SET VIEWPORT TO SPECIFIC DEVICE
     * Viewport can be specified to several type, check control+space on device param
     * @param {device}, cy.viewport('iphone-6') or samsung-s10, samsung-note9, etc
     */
    static setViewPortDevice(device){
        cy.viewport(device)
        Cypress.on('uncaught:exception',(err, runnable) =>{
            return false
        })
    }

    /**
     * SET VIEWPORT TO SPECIFIC DIMENSIONS
     * Viewport can be specified to several type, check control+space on device param
     * @param {width, height}, cy.viewport(550, 750) // Set viewport to 550px x 750px
     */
    static setViewPortDimensions(width, height){
        cy.viewport(width, height)
        Cypress.on('uncaught:exception',(err, runnable) =>{
            return false
        })
    }

    /**
     * SCROLL DOWN 
     */
    static scrollDown(){
        cy.scrollTo('bottom')
    }

    static scrollUp(){
        cy.scrollTo('top')
    }

    static scrollTimeDown(n){
        cy.scrollTo('bottom' ,{duration: n})
    }

    /**
     * VERIFY IF ELEMENT VISIBLE IN VIEWPORT
     * @param element 
     */
    static verifyElementVisible(element){
        cy.get(element, {timeout: 10000}).should('exist', 'be.visible')
    }

    /**
     * VERIFY IF ELEMENT VISIBLE AND HAVE SPECIFIC ATTR VALUE
     * @param {*} element 
     */
    static verifyElementVisibleWithAttr(element, attr, value){
        cy.get(element, {timeout: 10000})
        .should('exist', 'be.visible')
        .should('have.attr', attr)
        .should('include', value)
    }

    static verifyElementEnabled(element){
        cy.get(element, {timeout: 7000}).should('exist','be.enabled')
    }

    /**
     * VERIFY IF ELEMENT EXIST IN DOM
     * @param element 
     */
    static verifyElementExist(element){
        cy.get(element, {timeout: 7000}).should('exist')
    }

    /**
     * VERIFY IF ELEMENT EXIST IN DOM AND CONTAINS SPECIFIC STRING
     * @param {*} element 
     * @param {*} string 
     */
    static verifyIfElementExistsAndContains(element, string){
        cy.get(element, {timeout: 7000}).should('exist', 'be.visible')
        .contains(string)
    }

    /**
     * TYPE TEXT INTO DESIGNATED ELEMENT
     * @param {*} element 
     * @param {*} text 
     */
    static typeTextIntoElements(element, text){
        cy.get(element, {timeout: 15000}).should('exist', 'be.visible')
        .type(text)
        this.addWaitTime(1)
        // cy.get(element, {timeout: 7000}).should('exist', 'be.visible')
        // .type('{enter}')
    }

    /**
     * TYPE TEXT INTO ADDRESS FIELD (OPTION 1)
     * @param {*} element 
     * @param {*} text 
     */
    static typeTextIntoAddressField(element, text){
        cy.get(element, {timeout: 10000})
        .should('be.visible')
        .type(text)
        cy.get('#prediction-address-1', {timeout: 10000}).click()
    }

    /**
     * WAIT UNTIL ELEMENT DISAPPEAR
     * @param {*} element 
     */
    static waitAndVerifyUntilElementDisappear(element){
        cy.get(element, {timeout: 7000}).should('not.be.visible', 'not.exist')
    }

    /**
     * VERIFY ELEMENT NOT EXIST IN DOM
     * @param {*} element 
     */
    static verifyElementNotExist(element){
        cy.get(element).should('not.exist')
    }

    static waitForLoaderDisappear(element){
        cy.get(element, {timeout: 10000}).should('not.be.visible', 'not.exist')
    }

    static verifyElementListVisible(element){
        cy.get(element, {timeout:20000}).should('exist', 'be.visible').should('have.length.greaterThan', 0)
        .its('length')
        .then(cy.log)
    }

    static clickRandomListElement(element){
        cy.get(element).should('exist', 'be.visible').should('have.length.greaterThan', 0)
        .its('length')
        .then(cy.log)
        .then(function (n) {
            return Cypress._.random(0, n - 1)
        })
        .then(cy.log)
        .then(function (k) {
            cy.get(element)
              .eq(k)
              .click()
          })
    }

    // EXPERIMENT TRY CATCH ON CYPRESS
    static closeGetOnAppPopup(){
        if(cy.get(SELECTOR.BUTTON_CLOSE_MODAL_GET_ON_APP)){
            this.clickSelectedElement(SELECTOR.BUTTON_CLOSE_MODAL_GET_ON_APP)
        }
        else{
            cy.log('No Modal Pop Up')
        }
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    static closeGetOnAppPopupLanding(){
        base.clickSelectedElement(SELECTOR.GET_ON_APP_LANDING_POP_UP)
    }

    static verifyAnyVideoOnPage(){
        cy.get('video')
        .scrollIntoView()
        .should('have.prop', 'paused', true)
        .and('have.prop', 'ended', false)
    }

    static playAndScrollIntoVideoOnPage(){
        cy.get('video')
        .should('have.prop', 'paused', true)
        .and('have.prop', 'ended', false)
        .then(($video) => {
            $video[0].play()
        })
    }
}

export default base