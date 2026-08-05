---
name: playwright-ui-test
description: Browser automation testing skill using Playwright for UI testing
---

## Workflow of playwright-ui-test skills
1. Read requirements and identify the UI flows to be tested from <user requirement> and HTML file from user.
2. Generate test cases for each identified flow using the Playwright framework.
3. Run the generated test cases and validate the results
4. If the test cases fail, analyze the failure and fix the issues in the application or test cases and run until all test cases pass successfully.


## Project structure
```
tests/
  ├── features/
  │   └── feature1.flow1.spec.ts
  │   └── feature1.flow2.spec.ts
  └── utils/
      └── helper.ts
```

## Playwright UI Test best practices
1. Use descriptive test names and organize tests into logical groups.
2. Use page objects to encapsulate UI interactions and improve test maintainability.
3. Use assertions to validate expected behavior and outcomes.
4. Keep tests independent and avoid relying on the state of other tests.