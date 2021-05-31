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
      methodsPageLocators.link.tag,
      methodsPageLocators.link.locator
    );
  }
}

export default MethodsPage;
