# EazyTask End-to-End Tests

Automated end-to-end tests for the EazyTask web application using Cypress.

## About

This repository contains end-to-end tests covering core user workflows in the EazyTask web application. The project follows common QA automation practices with a focus on readability, maintainability, and scalability.

## Tech Stack

- Cypress
- JavaScript
- Git
- GitHub

## Test Coverage

### Authentication
- ✅ Register with email
- ✅ Sign in with email
- ✅ Sign out
- ✅ Custom login command (`cy.login()`)

### Project Management
- ✅ Create the first project
- ✅ Create additional projects

## Project Structure

```text
cypress/
├── e2e/
│   ├── auth/
│   │   ├── create-account/
│   │   ├── sign-in/
│   │   └── sign-out/
│   └── projects/
│       └── create-project/
├── fixtures/
├── support/
│   ├── commands.js
│   └── e2e.js
├── downloads/
├── screenshots/
└── videos/

cypress.config.js
package.json
README.md
```

## Installation

```bash
npm install
```

## Run Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run all tests in headless mode:

```bash
npx cypress run
```
