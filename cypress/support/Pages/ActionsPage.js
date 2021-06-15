import { checkCurrentURL } from "../Utils/assertions";

import { actionsPageLocators } from "../locators";

class ActionsPage {
  visit = () => cy.visit(actionsPageLocators.url);

  checkURL = () =>
    cy
      .location()
      .then((location) => checkCurrentURL(location, actionsPageLocators.url));

  selectTypeMethodHeader = () =>
    cy.contains(
      actionsPageLocators.typeHeader.tag,
      actionsPageLocators.typeHeader.locator
    );

  selectSampleInput = () => cy.get(actionsPageLocators.sampleInput);
}

export default ActionsPage;
