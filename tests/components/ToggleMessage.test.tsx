import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleMessage from "../../src/components/ToggleMessage"; // adjust the path as needed

describe("ToggleMessage Component", () => {
  it("should not display the message initially", () => {
    render(<ToggleMessage />);
    const message = screen.queryByText("The message is visible!");
    expect(message).not.toBeInTheDocument();
  });

  it("should display the message after clicking the button once", () => {
    render(<ToggleMessage />);
    const button = screen.getByText("Toggle Message");
    fireEvent.click(button);
    const message = screen.getByText("The message is visible!");
    expect(message).toBeInTheDocument();
  });

  it("should hide the message after clicking the button twice", () => {
    render(<ToggleMessage />);
    const button = screen.getByText("Toggle Message");
    fireEvent.click(button); // Show message
    fireEvent.click(button); // Hide message
    const message = screen.queryByText("The message is visible!");
    expect(message).not.toBeInTheDocument();
  });
});
