import { checkCurrentURL } from "../Utils/assertions";

import { methodsPageLocators } from "../locators";

class MethodsPage {
  visit = () => cy.visit(methodsPageLocators.url);

  checkURL = () =>
    cy
      .location()
      .then((location) => checkCurrentURL(location, methodsPageLocators.url));

  selectGetMethodLink = () =>
    cy.contains(
      methodsPageLocators.getMethod.tag,
      methodsPageLocators.getMethod.locator
    );

  selectTypeMethodLink = () =>
    cy.contains(
      methodsPageLocators.typeMethod.tag,
      methodsPageLocators.typeMethod.locator
    );
}

export default MethodsPage;
