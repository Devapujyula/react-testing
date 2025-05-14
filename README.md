# React Testing with Vitest

This guide walks you through setting up a React project with TypeScript and configuring it for testing using Vitest.

## Getting Started

1. **Create a new project:**
   Run the following command to create a new Vite project with React and TypeScript:

   ```bash
   npm create vite@latest
   Select the project name and choose React + TypeScript when prompted.
   ```

Install dependencies:
Navigate to your project directory and install the required dependencies:

bash
Copy
Edit
cd <your-project-name>
npm install
Install testing dependencies:

Add the necessary testing libraries:

bash
Copy
Edit
npm i -D vitest
npm i -d @testing-library/react
npm i -D jsdom
npm i -D @testing-library/jest-dom
npm i -D @types/jest
npm i @testing-library/dom
Update package.json:

Add a test script in package.json:

json
Copy
Edit
"scripts": {
"test:ui": "vitest --ui"
}
Create vitest.config.js:

In the root of the project, create a vitest.config.js file with the following content:

js
Copy
Edit
import { defineConfig } from "vitest/config";
export default defineConfig({
test: {
environment: "jsdom",
globals: true,
setupFiles: "tests/setup.ts",
},
});
Setup test environment:

Create a components folder inside the src directory for your React components.

Create a tests folder in the root directory for your test files.

Inside tests, create a setup.ts file and add the following:

ts
Copy
Edit
import "@testing-library/jest-dom";
Writing Tests
When writing tests for React components, follow these steps:

Import necessary packages:
Import testing libraries and components in your test files.

Describe your test suite:
Use describe blocks to organize your tests.

Write tests:
Write individual test cases using it or test.

Render the component:
Use render() from @testing-library/react to render your component to the DOM.

Select elements from the DOM:
Use query methods like getByRole, getByText, etc.

Assert the expected results:
Use assertions like expect() to check your component's behavior.

Example test:

tsx
Copy
Edit
import { render, screen } from "@testing-library/react";
import MyComponent from "../src/components/MyComponent";

test("displays a heading", () => {
render(<MyComponent />);
const heading = screen.getByRole("heading", { name: /hello world/i });
expect(heading).toBeInTheDocument();
});
Running Tests
Run the following command to start the UI for Vitest:

bash
Copy
Edit
npm run test:ui
If prompted to install @vitest/ui, type "yes" to proceed.

Common Query Methods
getByRole: Finds elements by their ARIA role. Useful for accessibility.

getByText, getByLabelText, etc.: Other query methods for selecting elements by their text, label, or other attributes.

findBy: For asynchronous elements.

queryBy: Returns null if the element is not found.

For more advanced queries, refer to the Testing Library documentation.

Troubleshooting
If you encounter issues during testing, refer to the console output for error details. Pay attention to any missing dependencies or incorrect configurations.
