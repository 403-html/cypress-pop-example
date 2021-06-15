# Utils

- [assertions](#assertions.js)
- [local storage](#localStorage.js)

## assertions.js

Contains all assertions we are using in tests in project.

- `checkVisiblity(elem, shouldBe)`
  - returns a response to the Cypress API as to whether the item is visible or not.
  - `elem` - `object`, element we want check, should be passed element we get by `cy.get()`/`cy.contains()`.
  - `shouldBe` - `boolean`, defines to check whether the element is visible (`true`) or not (`false`). The default value is `true`.
  - Example:
  ```js
  cy.get("#elem").should((elem) => checkVisibility(elem, false));
  ```
- `checkAmountOfElements(elem, num)`
  - returns a response to the Cypress API as to whether the number of elements in the DOM is as defined in the second argument.
  - `elem` - `object`, element we want check, should be passed element we get by `cy.get()`/`cy.contains()`.
  - `num` - `number`, defines how many elements should be in the DOM. The default value is `1`.
  - Example:
  ```js
  cy.get("#elem").should((elem) => checkAmountOfElements(elem, 4));
  ```
- `checkCurrentURL(location, url)`
  - returns a response to the Cypress API as to whether the URL we are at is matching URL we want to be.
  - `location` - `object`, current location we are in, should be passed after using `cy.location()`.
  - `url` - `string`, defines the URL where we should be. The default value is `undefined`.
  - Example:
  ```js
  cy.location().should((location) =>
    checkCurrentURL(location, "https://google.com/")
  );
  ```
- `checkInnerText(elem, text)`

  - returns a response to the Cypress API as to whether the text in element is present or not.
  - `elem` - `object`, element we want check, should be passed element we get by `cy.get()`/`cy.contains()`.
  - `text` - `string`, defines text which should be in given element. The default value is `undefined`.
  - Example:

  ```js
  cy.get("#elem").should((elem) => checkInnerText(elem, "Lorem ipsum"));
  ```

  ## localStorage.js

- `cy.saveLocalStorage()` - saves the current localStorage elements to an array in Cypress so that they can be used between test files
- `cy.restoreLocalStorage()` - restore localStorage from an array in Cypress to the current browser session
