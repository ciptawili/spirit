import base from "../step_definitions/common/base_function";

export const SELECTOR = {

    BUTTON_EDIT                             :`.css-rslbfv > .chakra-link`,
    INPUT_NAME                              :`[name=name]`,
    BUTTON_GENDER                           :`[id=gender]`,
    INPUT_HEIGHT                            :`[name=height]`,
    INPUT_WEIGHT                            :`[name=weight]`,
    INPUT_PHONE                             :`[name=phone]`,
    INPUT_ADDRESS                           :`[id=address]`,
    BUTTON_SUBMIT                           :`.fjMJVd > .sc-bxivhb`,
    BIRTHDAY_OPTIONS                        :`[class^=sc-gPEVay]`


}
export class AccountPage{

    static clickButtonEdit(){
        base.verifyElementExist(SELECTOR.BUTTON_EDIT)
        base.clickSelectedElement(SELECTOR.BUTTON_EDIT)
    }

    static editProfilePageIsDisplayed(){
        base.verifyElementExist(SELECTOR.INPUT_NAME)
        base.verifyElementExist(SELECTOR.BUTTON_GENDER)
        base.verifyElementExist(SELECTOR.INPUT_HEIGHT)
        base.verifyElementExist(SELECTOR.INPUT_WEIGHT)
        base.verifyElementExist(SELECTOR.INPUT_PHONE)
        base.verifyElementExist(SELECTOR.INPUT_ADDRESS)
        base.verifyElementExist(SELECTOR.BUTTON_SUBMIT)
    }

    static editProfilePageAfterRegisterIsDisplayed(){
        base.verifyElementExist(SELECTOR.BUTTON_GENDER)
        base.verifyElementExist(SELECTOR.INPUT_PHONE)
        base.verifyElementExist(SELECTOR.BIRTHDAY_OPTIONS)
        base.verifyElementExist(SELECTOR.BUTTON_SUBMIT)
    }

    static fillEditProfileData(name,height,weight,address) {
        base.clickSelectedElement(SELECTOR.INPUT_NAME)
        base.clearText(SELECTOR.INPUT_NAME)
        base.typeTextIntoElements(SELECTOR.INPUT_NAME,name)
        // base.clickSelectedElement(SELECTOR.BUTTON_GENDER)
        base.clickSelectedElement(SELECTOR.INPUT_HEIGHT)
        base.clearText(SELECTOR.INPUT_HEIGHT)
        base.typeTextIntoElements(SELECTOR.INPUT_HEIGHT,height)
        base.clickSelectedElement(SELECTOR.INPUT_WEIGHT)
        base.clearText(SELECTOR.INPUT_WEIGHT)
        base.typeTextIntoElements(SELECTOR.INPUT_WEIGHT,weight)
        // base.clickSelectedElement(SELECTOR.INPUT_PHONE)
        // base.clearText(SELECTOR.INPUT_PHONE)
        // base.typeTextIntoElements(SELECTOR.INPUT_PHONE,phone)
        base.clickSelectedElement(SELECTOR.INPUT_ADDRESS)
        base.clearText(SELECTOR.INPUT_ADDRESS)
        base.typeTextIntoElements(SELECTOR.INPUT_ADDRESS,address)
    }

    static fillEditProfileData2(name,height,weight,phone,address) {
        base.clickSelectedElement(SELECTOR.INPUT_NAME)
        base.clearText(SELECTOR.INPUT_NAME)
        base.typeTextIntoElements(SELECTOR.INPUT_NAME,name)
        // base.clickSelectedElement(SELECTOR.BUTTON_GENDER)
        base.clickSelectedElement(SELECTOR.INPUT_HEIGHT)
        base.clearText(SELECTOR.INPUT_HEIGHT)
        base.typeTextIntoElements(SELECTOR.INPUT_HEIGHT,height)
        base.clickSelectedElement(SELECTOR.INPUT_WEIGHT)
        base.clearText(SELECTOR.INPUT_WEIGHT)
        base.typeTextIntoElements(SELECTOR.INPUT_WEIGHT,weight)
        base.clickSelectedElement(SELECTOR.INPUT_PHONE)
        base.clearText(SELECTOR.INPUT_PHONE)
        base.typeTextIntoElements(SELECTOR.INPUT_PHONE,phone)
        base.clickSelectedElement(SELECTOR.INPUT_ADDRESS)
        base.clearText(SELECTOR.INPUT_ADDRESS)
        base.typeTextIntoElements(SELECTOR.INPUT_ADDRESS,address)
    }

    static clickButtonSubmit(){
        base.clickSelectedElement(SELECTOR.BUTTON_SUBMIT)
    }

}