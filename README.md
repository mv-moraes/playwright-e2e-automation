# QA Automation Portfolio — Playwright

Automated end-to-end testing project built using **Playwright** and **JavaScript**, applying industry-standard practices such as **Page Object Model**, **test data separation**, and **cross-browser execution**.

This project demonstrates the automation of a complete e-commerce flow including login validation, cart management, and checkout process.

---

## Application Under Test

**SauceDemo**  
https://www.saucedemo.com

A demo e-commerce platform commonly used for automation practice and portfolio demonstration.

---

## Test Coverage

### Authentication

- Login with valid credentials
- Login with invalid credentials
- Error message validation
- Navigation validation after login

### Cart

- Add product to cart
- Remove product from cart
- Cart badge validation

### Checkout

- Start checkout
- Fill customer information
- Complete purchase successfully
- Confirmation message validation

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- HTML Reporter

---

## Framework Design

This project follows modern automation architecture:

- Page Object Model (POM)
- Centralized test data
- Reusable login setup using `beforeEach`
- Cross-browser testing
- Failure evidence collection
- Clean and maintainable structure

---

## Features Implemented

- Cross-browser execution (Chromium, Firefox, WebKit)
- Screenshot capture on failure
- Video recording on failure
- Trace generation on retry
- HTML test report
- Structured test architecture
- Reusable page objects
- Centralized test data

---

## Project Structure
qa-playwright-portfolio
│
├── tests
│ ├── login.spec.js
│ ├── cart.spec.js
│ └── checkout.spec.js
│
├── pages
│ ├── LoginPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
│
├── data
│ └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

qa-playwright-portfolio
│
├── tests
│ ├── login.spec.js
│ ├── cart.spec.js
│ └── checkout.spec.js
│
├── pages
│ ├── LoginPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
│
├── data
│ └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

npm install


### Run all tests


npx playwright test


### Run tests in headed mode (visual)


npx playwright test --headed


### Run tests using UI mode


npx playwright test --ui


### Open HTML report


npx playwright show-report


---

## Browsers Covered

- Chromium
- Firefox
- WebKit

---

## Test Execution Flow

Example automated flow:

- Login
- Add product to cart
- Open cart
- Start checkout
- Fill customer data
- Complete order
- Validate success message

---

## Author

**Marcos Moraes**  
QA Automation Engineer

---

## Next Improvements (Roadmap)

- API testing integration
- Test tagging (smoke / regression)
- CI/CD pipeline integration
- Docker execution
- Environment configuration
- Parallel execution tuning
