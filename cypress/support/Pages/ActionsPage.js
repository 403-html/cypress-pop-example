import { checkCurrentURL } from "../Utils/assertions";

import { typePageLocators } from "../locators";

class ActionsPage {
  visit = () => cy.visit(typePageLocators.url);

  checkURL = () =>
    cy
      .location()
      .then((location) => checkCurrentURL(location, typePageLocators.url));

  selectTypeMethodHeader = () =>
    cy.contains(
      typePageLocators.typeHeader.tag,
      typePageLocators.typeHeader.locator
    );

  selectSampleInput = () => cy.get(typePageLocators.sampleInput);
}

export default ActionsPage;
