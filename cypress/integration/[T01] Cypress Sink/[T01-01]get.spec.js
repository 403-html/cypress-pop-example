// Imports
import MethodsPage from "../../support/Pages/allMethodsList.js";
import QueryingPage from "../../support/Pages/QueryingPage.js";

import {
  checkVisiblity,
  checkAmountOfElements,
  checkInnerText,
} from "../../support/Utils/assertions.js";

// Initialization
const methodsPage = new MethodsPage();
const queryingPage = new QueryingPage();

describe("Checking GET method page", () => {
  beforeEach(() => {
    methodsPage.visit();

    methodsPage.checkURL();

    methodsPage
      .selectGetMethodLink()
      .then((getbtn) => {
        checkAmountOfElements(getbtn, 1);
        checkVisiblity(getbtn);
      })
      .click();

    queryingPage.checkURL();

    queryingPage.selectGetMethodHeader().then((header) => {
      checkAmountOfElements(header, 1);
      checkVisiblity(header);
    });
  });

  it("Sample GET button is visible", () => {
    queryingPage.selectSampleButton().then((button) => {
      checkAmountOfElements(button, 1);
      checkVisiblity(button);
      checkInnerText(button, "Button");
    });
  });
});
