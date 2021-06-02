import { checkCurrentURL } from "../Utils/assertions";

import { typePageLocators } from "../locators";

class TypePage {
  visit() {
    return cy.visit(typePageLocators.url);
  }

  checkURL() {
    return cy
      .location()
      .then((location) => checkCurrentURL(location, typePageLocators.url));
  }

  selectTypeMethodHeader() {
    return cy.contains(
      typePageLocators.typeHeader.tag,
      typePageLocators.typeHeader.locator
    );
  }

  selectSampleInput() {
    return cy.get(typePageLocators.sampleInput);
  }
}

export default TypePage;
