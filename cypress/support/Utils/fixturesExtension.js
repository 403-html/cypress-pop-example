Cypress.Commands.add(
  "updateFixtureProperty",
  (fixturePath, propName, newContent) => {
    const properFixturePath = `./cypress/fixtures/${fixturePath}`;

    cy.readFile(properFixturePath).then((fixture) => {
      let editedObj = fixture;
      editedObj[propName] = newContent;
      cy.writeFile(properFixturePath, editedObj);
    });
  }
);
