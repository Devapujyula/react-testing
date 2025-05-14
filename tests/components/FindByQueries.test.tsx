// tests/components/FindByQueries.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import FindByQueries from "../../src/components/FindByQueries";

describe("FindByQueries Component", () => {
  beforeEach(() => {
    render(<FindByQueries />);
  });

  it("should find the heading by text", () => {
    const heading = screen.getByText("FindBy Queries Test");
    expect(heading).toBeInTheDocument();
  });

  it('should find paragraph with text "Hello World"', () => {
    const paragraph = screen.getByText("Hello World");
    expect(paragraph).toBeInTheDocument();
  });

  it("should find the button using aria-label", () => {
    const button = screen.getByLabelText("click-me");
    expect(button).toBeInTheDocument();
  });

  it("should find the input using placeholder text", () => {
    const input = screen.getByPlaceholderText("Enter text here");
    expect(input).toBeInTheDocument();
  });

  it("should find the image by alt text", () => {
    const image = screen.getByAltText("test-image");
    expect(image).toBeInTheDocument();
  });

  it("should find the input by its default value", () => {
    const input = screen.getByDisplayValue("This is a test input");
    expect(input).toBeInTheDocument();
  });

  it("should find the element by test ID", () => {
    const testElement = screen.getByTestId("test-element");
    expect(testElement).toBeInTheDocument();
  });

  it("should find the input using label text", () => {
    const labeledInput = screen.getByLabelText("Test Input Label");
    expect(labeledInput).toBeInTheDocument();
  });

  it("should find the second input using its placeholder", () => {
    const placeholderInput = screen.getByPlaceholderText("Test placeholder");
    expect(placeholderInput).toBeInTheDocument();
  });
});
