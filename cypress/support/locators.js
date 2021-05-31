export default {
  methodsPageLocators: {
    url: "https://example.cypress.io/",
    link: { tag: "a", locator: "get" },
  },
  queryingPageLocators: {
    url: "https://example.cypress.io/commands/querying",
    getHeader: { tag: "h4", locator: "cy.get()" },
    sampleButton: "#query-btn",
  },
};
