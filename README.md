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
✅ Register with email  
✅ Sign in with email  
✅ Custom login command (`cy.login()`)

### Project Management
✅ Create the first project when no projects exist  
✅ Create an additional project

## Project Structure

```text
cypress/
├── e2e/
│   └── auth/
│       ├── Create-account/
│       │   └── register-with-email.cy.js
│       ├── Sign-in/
│       │   └── sign-in-with-email.cy.js
│       └── home-page/
│           └── Create New Project/
│               └── create-new-project.cy.js
├── fixtures/
└── support/
    ├── commands.js
    └── e2e.js
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
