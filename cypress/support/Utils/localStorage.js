import _forEach from "lodash/forEach";

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  _forEach(Object.keys(localStorage), (key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });

  cy.log("Storage saved");
});

Cypress.Commands.add("restoreLocalStorage", () => {
  _forEach(Object.keys(LOCAL_STORAGE_MEMORY), (key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });

  cy.log("Storage restored");
});
