import base from "../step_definitions/common/base_function";

export const SELECTOR = {
    INPUT_EMAIL                             :`[id=email]`,
    INPUT_PASSWORD                          :`[name=password]`,
    BUTTON_SUBMIT_LOGIN                     :`.jRZCfq`
}
export class LoginPage{

    static inputEmail(email){
        base.clickSelectedElement(SELECTOR.INPUT_EMAIL)
        base.typeTextIntoElements(SELECTOR.INPUT_EMAIL,email)
    }

    static loginWithEmailAndPassword(email,password){
        base.clickSelectedElement(SELECTOR.INPUT_EMAIL)
        base.typeTextIntoElements(SELECTOR.INPUT_EMAIL,email)
        base.clickSelectedElement(SELECTOR.INPUT_PASSWORD)
        base.typeTextIntoElements(SELECTOR.INPUT_PASSWORD,password)
        base.clickFirstSelectedElement(SELECTOR.BUTTON_SUBMIT_LOGIN)
    }
    
    static inputPassword(password){
        base.typeTextIntoElements(SELECTOR.INPUT_PASSWORD,password)
    }

    static clickSubmitLogin(){
        base.clickSelectedElement(SELECTOR.BUTTON_SUBMIT_LOGIN)
    }

}