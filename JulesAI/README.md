# QA Automation Challenge

Automated UI and API testing for HaroldWaste Demo.

## Features
- ✅ UI Testing with Playwright
- ✅ Data-Driven Testing
- ✅ GraphQL API testing with Postman
- ✅ Bug Reporting
- ✅ GitHub CI/CD Pipeline with HTML Reports

## Getting Started

### Run Tests Locally

```bash
npm install
npx playwright test
npx playwright show-report
```

### Postman
Import the `postman/api-tests.postman_collection.json` collection in Postman.

## CI/CD
Uses GitHub Actions to run Playwright & Postman tests on each push.
