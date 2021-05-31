import { checkCurrentURL } from "../Utils/assertions";

import { queryingPageLocators } from "../locators";

class QueryingPage {
  visit() {
    return cy.visit(queryingPageLocators.url);
  }

  checkURL() {
    return cy
      .location()
      .then((location) => checkCurrentURL(location, queryingPageLocators.url));
  }

  selectGetMethodHeader() {
    return cy.contains(
      queryingPageLocators.getHeader.tag,
      queryingPageLocators.getHeader.locator
    );
  }

  selectSampleButton() {
    return cy.get(queryingPageLocators.sampleButton);
  }
}

export default QueryingPage;
