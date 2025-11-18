# Sauce Demo Playwright Automation Project
Automation tests for the [Sauce demo](https://www.saucedemo.com/) website using Playwright with JavaScript. Tests cover different types of users and scenarios and generate Allure reports for results.


## Project setup
  1. Clone the project or download zip.  
  2. Open in VS Code.  
  3. Install dependencies:  
```sh
npm install
npx playwright install
npm i allure-playwright
npm i allure-commandline
```
## Run test

Run all tests in headed mode:  
```sh
npm run test
```
Run a single test:
```sh
npm run locked      # locked.spec.js
npm run standard    # standard.spec.js
npm run performance # performance.spec.js
```
Note: The first run using this syntax may not work. If that happens, you can run the test directly with Playwright using:
```sh
npx playwright test filename
```

## Allure Report

Clean and generate report:
```sh
npm run allure-clean
```

Open report:
```sh
allure open
```

## Contact

For any questions or feedback, please contact [Md. Akramul Islam](https://github.com/akramul15).
