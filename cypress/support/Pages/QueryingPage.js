import { checkCurrentURL } from "../Utils/assertions";

import { queryingPageLocators } from "../locators";

class QueryingPage {
  visit = () => cy.visit(queryingPageLocators.url);

  checkURL = () =>
    cy
      .location()
      .then((location) => checkCurrentURL(location, queryingPageLocators.url));

  selectGetMethodHeader = () =>
    cy.contains(
      queryingPageLocators.getHeader.tag,
      queryingPageLocators.getHeader.locator
    );

  selectSampleButton = () => cy.get(queryingPageLocators.sampleButton);
}

export default QueryingPage;
