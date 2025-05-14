import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld";

describe("Hello World Component", () => {
  it("should render a Hello World component", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
