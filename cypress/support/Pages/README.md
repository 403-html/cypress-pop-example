# Pages

- [allMethodsList.js](##allMethodsList.js)
- [QueryingPage.js](##QueryingPage.js)

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
- `selectGetMethodHeader()` - select header of that `get()` page
- `selectSampleButton()` - select dummy button in `get()` page
