import base from "../step_definitions/common/base_function";

export const SELECTOR = {

    INPUT_NAME                              :`[id=name]`,
    INPUT_EMAIL                             :`[id=email]`,
    INPUT_PASSWORD                          :`[name=password]`,
    CHECKBOX_TNC                            :`[id=ok-check]`,
    BUTTON_SUBMIT                           :`button[type=submit]`

}
export class RegisterPage{

    static registerPageIsDisplayed(){
        base.verifyElementExist(SELECTOR.INPUT_NAME)
        base.verifyElementExist(SELECTOR.INPUT_EMAIL)
        base.verifyElementExist(SELECTOR.INPUT_PASSWORD)
        base.verifyElementExist(SELECTOR.CHECKBOX_TNC)
    }

    static fillRegisterData(name,email,password) {
        base.clickSelectedElement(SELECTOR.INPUT_NAME)
        base.typeTextIntoElements(SELECTOR.INPUT_NAME,name)
        base.clickSelectedElement(SELECTOR.INPUT_EMAIL)
        base.typeTextIntoElements(SELECTOR.INPUT_EMAIL,email)
        base.clickSelectedElement(SELECTOR.INPUT_PASSWORD)
        base.typeTextIntoElements(SELECTOR.INPUT_PASSWORD,password)
        base.clickSelectedElement(SELECTOR.CHECKBOX_TNC)
    }

    static clickButtonSubmit(){
        base.clickSelectedElement(SELECTOR.BUTTON_SUBMIT)
    }

}