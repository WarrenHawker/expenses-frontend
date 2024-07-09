# My Expenses Tracker App

> Expenses tracking app

## Description

This app links to an API to fetch, create and delete expenses from a database. This app is created using Vite and React

## Requirements

- Node v18
- npm v9

## Folder Structure

Below is an outline of the main folder and files within the project

```
/                         # root directory
├── dist/                 # Production ready JS and CSS files
├── node_modules/         # code for all third-party packages and React/Vite
├── src/
│ ├── components
│ │ ├── Form              # Form component for adding new expenses
│ │ ├── Grid              # Grid to display all saved expenses
│ ├── functions           # Globally used functions
  └── app.tsx             # Parent component - wraps all other components
  └── index.css           # Globally used CSS
  └── main.tsx            # React entrypoint
└── index.html            # Main html file
```

## Installation

Follow the steps below to run the app locally:

1. Run the command `git clone https://github.com/WarrenHawker/expenses-frontend` to clone the repo.
2. Run the command `npm install` to install all dependencies
3. Run the command `npm run dev` to start the development server on http://localhost:5173 in the web browser

## Build to production

To create a production-ready set of Javascript and CSS files, run the `npm run build` command. This creates a `dist` directory containing all the Javascript, CSS and assets for the app. This can be deployed directly to the web server of your choice.

## ERRORS

This app currently has the following errors:

1. The expense cards in the grid are overflowing into each other (there should be a space inbetween each card).
2. Deleting an expense removes it from the database but doesn't correctly update the expenses grid.
3. Adding a new expense doesn't create the record in the database or update the expenses grid.
4. When adding a new expense, if there is an error from the form submission it adds garbage data to the expenses array.
5. There is nothing stopping the user from putting a negative number in the "amount" field.

Documentation for the API can be found in the documentation.pdf file in the root of this project.
