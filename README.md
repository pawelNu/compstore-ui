# CompStore UI

CompStore web store frontend

-   [CompStore UI](#compstore-ui)
    -   [Owners](#owners)
    -   [Technology stack](#technology-stack)
    -   [Runs on port](#runs-on-port)
    -   [Other used sources](#other-used-sources)
    -   [Repositories](#repositories)
    -   [Commit prefixes](#commit-prefixes)
    -   [Name conventions](#name-conventions)
    -   [CSS class](#css-class)
    -   [Types](#types)
    -   [Code formatting configuration](#code-formatting-configuration)

## Owners

-   @grz55
-   @pawelNu

## Technology stack

-   Node.js v18.18.0
-   Typescript v5.2.2
-   React v18.2.0
-   Bootstrap v5.2.3

## Runs on port

3000

## Other used sources

-   Icons: https://iconmonstr.com/

## Repositories

Frontend: https://github.com/pawelNu/compstore-ui

Backend: https://github.com/grz55/compstore-api

## Commit prefixes

-   feat(task_no): The new feature you're adding to a particular application
-   fix(task_no): A bug fix
-   style(task_no): Feature and updates related to styling
-   refactor(task_no): Refactoring a specific section of the codebase
-   test(task_no): Everything related to testing
-   docs(task_no): Everything related to documentation
-   chore(task_no): Regular code maintenance. [ You can also use emojis to represent commit types]

## Name conventions

### CSS class

-   lowercase letters separated by dashes
-   css file name + class name

Example:

`Products.css` and CSS class `price-tag` will result in `products-price-tag`.

### Types

-   prefix `T`
-   PascalCase, the first letter of each word is a capital letter

Example: type `PCDetails` name will result in `TPCDetails`.

## Code formatting configuration

In `.husky` directory Git hook `pre-commit` will format project code during commit.

To manually format project: `npm run format`.
