import base from "../step_definitions/common/base_function";

export const SELECTOR = {
    ICON_PROFILE                            :`#popover-profile > div > .sc-jzJRlG`,
    MENU_PROFILE                            :`.kqazqG`
}
export class HomePage{

    static clickIconProfile(){
        base.clickSelectedElement(SELECTOR.ICON_PROFILE)
    }

    static clickMenuProfile(){
        base.clickSelectedElement(SELECTOR.MENU_PROFILE)
    }

    static homePageAfterLoginDisplayed(){
        base.verifyElementExist(SELECTOR.ICON_PROFILE)
    }

}