const updateFixture = "to-be-updated.json";
const fixedFixture = "original-to-be-updated.json";
const fixedFixturePath = `./cypress/fixtures/${fixedFixture}`;
const updateFixturePath = `./cypress/fixtures/${updateFixture}`;

describe("Fixture update", () => {
  beforeEach(() => {
    cy.readFile(fixedFixturePath).then((original) => {
      cy.writeFile(updateFixturePath, original);

      cy.readFile(updateFixturePath).then((fixture) => {
        expect(fixture).to.be.deep.equal(original);
      });
    });
  });

  it("Fixture name should be updated from John to other name", () => {
    const newName = "Max";

    cy.updateFixtureProperty(updateFixture, "name", newName);

    cy.readFile(updateFixturePath).then((fixture) => {
      expect(fixture.name).to.be.deep.equal(newName);
    });
  });
});
