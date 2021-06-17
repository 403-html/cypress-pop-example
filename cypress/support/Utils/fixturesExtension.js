Cypress.Commands.add(
  "updateFixtureProperty",
  (fixtureName, propName, newContent) => {
    const properFixturePath = `./cypress/fixtures/${fixtureName}`;

    cy.readFile(properFixturePath).then((fixture) => {
      let editedObj = fixture;
      editedObj[propName] = newContent;
      cy.writeFile(properFixturePath, editedObj);
    });
  }
);
