import React from "react";
import { render, screen } from "@testing-library/react";
import FindAllByQueries from "../../src/components/FindAllByQueries";

describe("FindAllByQueries Component", () => {
  beforeEach(() => {
    render(<FindAllByQueries />);
  });

  it("should find all paragraphs", async () => {
    const paragraphs = await screen.findAllByText(/Item \d/);
    expect(paragraphs).toHaveLength(3);
  });

  it("should find all buttons by aria-label", async () => {
    const buttons = await screen.findAllByLabelText("click-me");
    expect(buttons).toHaveLength(3);
  });

  it("should find all inputs by placeholder", async () => {
    const inputs = await screen.findAllByPlaceholderText("Enter text here");
    expect(inputs).toHaveLength(3);
  });

  it("should find all images by alt text", async () => {
    const images = await screen.findAllByAltText("test-image");
    expect(images).toHaveLength(3);
  });

  it("should find all inputs by default value", async () => {
    const inputs1 = await screen.findAllByDisplayValue(/Test input \d/);
    expect(inputs1).toHaveLength(3);
  });

  it("should find all elements by test ID", async () => {
    const elements = await screen.findAllByTestId("test-element");
    expect(elements).toHaveLength(3);
  });
});
