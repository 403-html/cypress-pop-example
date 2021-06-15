# cypress-pop-example

## Table of contents

- [What is it about?](#what-is-it-about)
- [Project launch](#project-launch)
- [Shortcuts](#shortcuts)
- [Project files structure](#project-files-structure)

## What is it about?

Example of implementation page object pattern in Cypress. Project was designed to standardize the flow of our _(first contributors)_ work with Cypress.

However, the project is supposed to _"live own life"_ and be improved as our knowledge about the topic grows.

Also it contains examples and helpful methods, so it is on the public repository so always you can jump into project and copy custom methods which can help your work.

> Each folder have own `README.md` to explain what's there and how you can use it.

## Project launch

First you need `npm`/`yarn` and `git`.
Clone latest version of `main` branch and go to that folder.

```
git clone https://github.com/403-html/cypress-pop-example.git && cd ./cypress-pop-example
```

then build it

```
yarn install
```

and run the Cypress

```
yarn cypress open
```

You're ready to run tests!

## Shortcuts

[Tests](cypress/integration/README.md) - here you'll have description of all tests, what's going on there

[Methods/Page Objects](cypress/support/README.md) - here you'll have description of all custom commands, methods, page objects added to this project

## Project files structure

```
.
└ README.md
|
└ CHANGELOG.md
|
└ .gitignore
|
└ cypress.json
|
└ package.json
|
└─── cypress/
     |
     └─── fixtures/
     |    |
     |    └ example.json
     |
     └─── integration/
     |    |
     |    └─── [T01] Cypress Sink/
     |          |
     |          └ README.md
     |          |
     |          └ [T01-01]get.spec.js
     |
     └─── plugins/
     |    |
     |    └ index.js
     |
     └─── support/
          |
          └─── Pages/
          |    |
          |    └ allMethodsList.js
          |    |
          |    └ QuaryingPage.js
          |
          └─── Utils/
          |   |
          |   └ assertions.js
          |   |
          |   └ localStorage.js
          |
          └ commands.js
          |
          └ index.js
          |
          └ locators.js
```
