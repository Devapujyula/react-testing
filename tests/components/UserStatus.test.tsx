import React from "react";
import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus Components", () => {
  it("display a welcome message when an email is provided", () => {
    render(<UserStatus email="prakash@gmail.com" />);

    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("display the sign up bottom when no email is provided", () => {
    render(<UserStatus email="" />);
    const signUpBottom = screen.getByText(/Sign Up/i);
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
