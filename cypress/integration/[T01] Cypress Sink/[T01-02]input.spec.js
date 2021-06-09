// Imports
import MethodsPage from "../../support/Pages/allMethodsList.js";
import TypePage from "../../support/Pages/typePage.js";

import {
  checkVisiblity,
  checkAmountOfElements,
  checkIfValue,
} from "../../support/Utils/assertions.js";

// Initialization
const methodsPage = new MethodsPage();
const typePage = new TypePage();

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

    typePage.checkURL();

    typePage.selectTypeMethodHeader().then((header) => {
      checkAmountOfElements(header, 1);
      checkVisiblity(header);
    });
  });

  it("Sample input type", () => {
    cy.fixture("example.json").then(({ email }) => {
      typePage
        .selectSampleInput()
        .then((input) => {
          checkAmountOfElements(input, 1);
          checkVisiblity(input);
        })
        .type(email)
        .then((input) => checkIfValue(input, email));
    });
  });
});
