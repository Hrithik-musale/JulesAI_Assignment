# Approach Summary

## Strategy
- Focused on end-to-end user flows (login, dashboard)
- Used Page Object Model for maintainability
- Added JSON-based data-driven testing
- Used GitHub Actions for CI/CD
- Included Postman GraphQL tests with Newman

## Challenges
- No documentation for selectors: Solved by manual inspection
- CI integration with Postman: Solved via Newman setup

## Suggestions
- Add Playwright retry feature
- Implement parallel test runs
- Include visual regression testing