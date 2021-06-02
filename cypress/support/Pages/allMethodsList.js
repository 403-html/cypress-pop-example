import { checkCurrentURL } from "../Utils/assertions";

import { methodsPageLocators } from "../locators";

class MethodsPage {
  visit() {
    return cy.visit(methodsPageLocators.url);
  }

  checkURL() {
    return cy
      .location()
      .then((location) => checkCurrentURL(location, methodsPageLocators.url));
  }

  selectGetMethodLink() {
    return cy.contains(
      methodsPageLocators.getMethod.tag,
      methodsPageLocators.getMethod.locator
    );
  }

  selectTypeMethodLink() {
    return cy.contains(
      methodsPageLocators.typeMethod.tag,
      methodsPageLocators.typeMethod.locator
    );
  }
}

export default MethodsPage;
