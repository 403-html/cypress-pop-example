const methodsPageLocators = {
  url: "https://example.cypress.io/",
  getMethod: { tag: "a", locator: "get" },
  typeMethod: { tag: "a", locator: "type" },
};

const queryingPageLocators = {
  url: "https://example.cypress.io/commands/querying",
  getHeader: { tag: "h4", locator: "cy.get()" },
  sampleButton: "#query-btn",
};

const typePageLocators = {
  url: "https://example.cypress.io/commands/actions",
  typeHeader: { tag: "h4", locator: ".type()" },
  sampleInput: "#email1",
};

export default {
  methodsPageLocators,
  queryingPageLocators,
  typePageLocators,
};
