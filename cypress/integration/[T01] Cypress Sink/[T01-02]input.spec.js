// Imports
import MethodsPage from "../../support/Pages/allMethodsList.js";
import ActionsPage from "../../support/Pages/ActionsPage.js";

import {
  checkVisiblity,
  checkAmountOfElements,
  checkIfValue,
} from "../../support/Utils/assertions.js";

// Initialization
const methodsPage = new MethodsPage();
const actionsPage = new ActionsPage();

describe("Checking fixture method", () => {
  beforeEach(() => {
    methodsPage.visit();

    methodsPage.checkURL();

    methodsPage
      .selectTypeMethodLink()
      .then((linkbtn) => {
        checkAmountOfElements(linkbtn, 1);
        checkVisiblity(linkbtn);
      })
      .click();

    actionsPage.checkURL();

    actionsPage.selectTypeMethodHeader().then((header) => {
      checkAmountOfElements(header, 1);
      checkVisiblity(header);
    });
  });

  it("Standard input type", () => {
    cy.fixture("example.json").then(({ email }) => {
      actionsPage
        .selectSampleInput()
        .then((input) => {
          checkAmountOfElements(input, 1);
          checkVisiblity(input);
        })
        .type(email)
        .then((input) => checkIfValue(input, email));
    });
  });

  it("Average user input type", () => {
    cy.fixture("example.json").then(({ email }) => {
      actionsPage
        .selectSampleInput()
        .then((input) => {
          checkAmountOfElements(input, 1);
          checkVisiblity(input);
        })
        .type(email, { humanType: true })
        .then((input) => checkIfValue(input, email));
    });
  });
});
