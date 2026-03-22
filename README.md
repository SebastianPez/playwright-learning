# Playing with Playwright  
A simple and straightforward testing project to revisit patterns for UI, API and Integration tests with a basic framework using standard QA practices.
- Playwright
- Javascript
- dotenv (Environment Config)
## Setup
### 1. Install Dependencies
npm install
### 2. Intsall Playwright browsers
npx playwright install  
sudo npx playwright install-deps  
*you may need to update your VM's Node version or change your sudo Node path, in case your VM uses an older version of Node*  
### 3. Configure environmental variables
Create a .env in the root folder.  

BASE_URL=https://jsonplaceholder.typicode.com  
UI_URL=https://demoqa.com  
## Running tests
**Run all tests**  
npm test  

**Run specific suites**  
npm run test:api  
npm run test:ui  
npm run test:integration  

**Run in UI mode**  
npm run test:ui-mode  