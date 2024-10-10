# Playwright Automation Assignment

## Project Overview
This project is an automation testing framework using Playwright with TypeScript, designed to test a simple web application. It implements the Page Object Model (POM) and utilizes data-driven testing principles to validate login functionality.

## Features
- Automated login tests (valid, invalid, and empty credentials)
- Verification of user login status on the home page
- Session reuse for tests to avoid repeated logins
- Data-driven testing with multiple credential sets

## Preconditions
- Node.js and npm should be installed.
- Playwright should be installed in your project.
- A valid GitHub repository is set up for version control.
- Ensure the `data.json` file contains the required credential data.

## Postconditions
- Test reports will be generated after running the tests.
- Test results will be logged, showing successful and failed tests.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/pratik9905/Playwright_Assigment.git
   cd Playwright_Assigment

2. Install the required packages:
   ```bash
   npm install

3. Run the tests:
   ```bash
   npx playwright test

4. View the test report: After running the tests, the results will be displayed in the terminal, and an HTML report will be generated if configured.

## Folder Structure

```bash
.
├── data.json         # Contains test credentials
├── utils              # Utility functions
│   └── utils.ts
├── Pages              # Page Object Model classes
│   ├── Home.page.ts
│   └── Login.page.ts
├── tests              # Test scripts
│   └── login.test.ts
└── README.md         # Project documentation


##Contributing

Feel free to submit a pull request if you would like to contribute to this project.

##License

This project is licensed under the MIT License.



  
  
