React Todo App with Vitest & Testing Library
This is a simple React Todo app with testing configured using Vitest and React Testing Library.

Project Setup
To set up the project, follow these steps:

1. Create the Project
   Run the following command to create a new React project using Vite:

bash
Copy code
npm create vite@latest
After running this command, provide a project name and select the following options:

React: Select React template

TypeScript: Choose TypeScript for testing.

2. Install Dependencies
   Once the project is created, navigate to the project directory and install all necessary dependencies using the following command:

bash
Copy code
npm install
Then, install the required testing libraries:

bash
Copy code
npm i -D vitest
npm i -D @testing-library/react
npm i -D jsdom
npm i -D @testing-library/jest-dom
npm i -D @types/jest
npm i @testing-library/dom 3. Update package.json
Open your package.json file and add the following script in the scripts section:

json
Copy code
"scripts": {
"test:ui": "vitest --ui"
} 4. Set Up Vitest Configuration
Create a vitest.config.js file in the root of your project with the following content:

js
Copy code
import { defineConfig } from "vitest/config";
export default defineConfig({
test: {
environment: "jsdom",
globals: true,
setupFiles: "tests/setup.ts",
},
}); 5. Create Setup File
Create a setup.ts file in the tests folder (in the root directory) and add the following import statement:

ts
Copy code
import "@testing-library/jest-dom"; 6. Create the Components Folder
In the src directory, create a components folder where you will store your React components.

7. Testing with Vitest and React Testing Library
   Now, you are ready to test your React components using Vitest and React Testing Library.

Testing a Component
When writing tests for React components, follow these steps:

Import all necessary testing libraries.

Describe your test suite with a meaningful name.

Write individual test cases using it or test blocks.

Render the component in the DOM.

Select the DOM elements you want to test.

Assert the expected results.

Example Test Code
Here is an example of a basic test suite for your Todo app:

tsx
Copy code
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../../src/components/TodoList";

describe("TodoList", () => {
it("renders TodoList with an input and a button", () => {
render(<TodoList />);

    expect(screen.getByPlaceholderText("Enter new todo")).toBeInTheDocument();
    expect(screen.getByText("Add Todo")).toBeInTheDocument();

});

it("can add a todo item", async () => {
render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByText("Add Todo");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();

});

it("can mark a todo as completed", async () => {
render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByText("Add Todo");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const todoItem = screen.getByText("New Todo");
    expect(todoItem).toHaveStyle("text-decoration: line-through");

});

it("can delete a todo item", async () => {
render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByText("Add Todo");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    const deleteButton = screen.getByText("Delete");
    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
    });

});
});
Accessibility in Testing
getByRole
getByRole is a query method used to find DOM elements by their ARIA role. It is recommended to use getByRole for accessible querying of elements, as it works with screen readers and other assistive technologies.

js
Copy code
const button = screen.getByRole('button');
Purpose of Queries
getBy: Use when the element must be found in the DOM.

queryBy: Use when the element may or may not be found in the DOM.

findBy: Use when you are dealing with asynchronous elements that appear after some delay.

getAllBy: Use for handling multiple elements of the same type.

queryAllBy: Use when multiple elements may or may not exist.

findAllBy: Use when multiple elements appear asynchronously.

This README.md should help you set up and test your React Todo app, and ensure your components are tested properly using Vitest and React Testing Library.
