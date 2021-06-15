const fixedFixture = "./cypress/fixtures/original-to-be-updated.json";
const toBeUpdatedFixture = "./cypress/fixtures/to-be-updated.json";

describe("Fixture update", () => {
  beforeEach(() => {
    cy.readFile(fixedFixture).then((original) => {
      cy.writeFile(toBeUpdatedFixture, original);

      cy.readFile(toBeUpdatedFixture).then((fixture) => {
        expect(fixture).to.be.deep.equal(original);
      });
    });
  });

  it("Fixture name should be updated from John to other name", () => {
    const newName = "Max";

    cy.readFile(toBeUpdatedFixture).then((fixture) => {
      let editedObj = fixture;
      editedObj["name"] = newName;
      cy.writeFile(toBeUpdatedFixture, editedObj);
    });

    cy.readFile(toBeUpdatedFixture).then((fixture) => {
      expect(fixture.name).to.be.deep.equal(newName);
    });
  });
});
