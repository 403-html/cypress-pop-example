# Pages

- [allMethodsList.js](#allMethodsList.js)
- [QueryingPage.js](#queryingPage.js)
- [ActionsPage.js](#actionsPage.js)

## allMethodsList.js

Class of Cypress Sink page which contains all possible methods.

Sample import and use:

```javascript
import MethodsPage from "../../support/Pages/allMethodsList.js";
const allMethodsPage = new MethodsPage();
allMethodsPage.visit();
```

- `visit()` - visit page `https://example.cypress.io/`
- `checkURL()` - check if current URL is `https://example.cypress.io/`
- `selectGetMethodLink()` - select element which moves us to `get()` Cypress method page

## QueryingPage.js

Class of Cypress Sink page about querying methods (like `cy.get()`).

Sample import and use:

```javascript
import QueryingPage from "../../support/Pages/QueryingPage.js";
const queryingPage = new QueryingPage();
queryingPage.visit();
```

- `visit()` - visit page `https://example.cypress.io/commands/querying`
- `checkURL()` - check if current URL is `https://example.cypress.io/commands/querying`
- `selectGetMethodHeader()` - select header of that `get()` method
- `selectSampleButton()` - select dummy button in `get()` method

## ActionsPage.js

Class of Cypress Sink page about actions methods (like `cy.type()`).

Sample import and use:

```javascript
import ActionsPage from "../../support/Pages/ActionsPage.js";
const actionsPage = new ActionsPage();
actionsPage.visit();
```

- `visit()` - visit page `https://example.cypress.io/commands/actions`
- `checkURL()` - check if current URL is `https://example.cypress.io/commands/actions`
- `selectTypeMethodHeader()` - select header of that `type()` method
- `selectSampleInput()` - select dummy input in `type()` method
