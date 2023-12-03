# CompStore UI

CompStore web store frontend

-   [CompStore UI](#compstore-ui)
    -   [Owners](#owners)
    -   [Technology stack](#technology-stack)
    -   [Runs on port:](#runs-on-port)
    -   [Other used sources](#other-used-sources)
    -   [Repositories](#repositories)
    -   [Commit prefixes:](#commit-prefixes)
    -   [CSS class name convention](#css-class-name-convention)
    -   [Code formatting configuration](#code-formatting-configuration)

## Owners

-   @grz55
-   @pawelNu

## Technology stack

-   Node.js v18.18.0
-   Typescript v5.2.2
-   React v18.2.0
-   Bootstrap v5.2.3

## Runs on port:

3000

## Other used sources

-   Icons: https://iconmonstr.com/

## Repositories

Frontend: https://github.com/pawelNu/compstore-ui

Backend: https://github.com/grz55/compstore-api

## Commit prefixes:

-   feat(task_no): The new feature you're adding to a particular application
-   fix(task_no): A bug fix
-   style(task_no): Feature and updates related to styling
-   refactor(task_no): Refactoring a specific section of the codebase
-   test(task_no): Everything related to testing
-   docs(task_no): Everything related to documentation
-   chore(task_no): Regular code maintenance. [ You can also use emojis to represent commit types]

## CSS class name convention

-   lowercase letters separated by dashes
-   css file name + class name

Example:

`Products.css` and CSS class `price-tag` will result in `products-price-tag`.

## Code formatting configuration

Run `npm install --save-dev prettier husky`

Run `npx husky install` it will create `.husky` directory -> husky - Git hooks installed

Add to `package.json`

```json
"scripts": {
  "format": "prettier --write ."
},
"husky": {
        "hooks": {
            "pre-commit": "npm run format"
        }
    },
```

To manually format project `npm run format`
