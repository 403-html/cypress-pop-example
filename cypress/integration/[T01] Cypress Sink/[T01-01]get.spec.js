context("Checking GET method page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");

    cy.location().then((location) => {
      expect(location.href).to.eq("https://example.cypress.io/");
    });

    cy.contains("a", "get")
      .then((getbtn) => {
        expect(getbtn).to.have.lengthOf(1);
        expect(getbtn).to.be.visible;
      })
      .click();

    cy.location().then((location) => {
      expect(location.href).to.eq(
        "https://example.cypress.io/commands/querying"
      );
    });

    cy.contains("h4", "cy.get()").then((header) => {
      expect(header).to.have.lengthOf(1);
      expect(header).to.be.visible;
    });
  });

  it("Sample GET button is visible", () => {
    cy.get("#query-btn").then((button) => {
      expect(button).to.have.lengthOf(1);
      expect(button).to.be.visible;
      expect(button).to.contain("Button");
    });
  });
});
