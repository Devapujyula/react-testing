import React from "react";
import { render, screen } from "@testing-library/react";
import ProgrammingLanguagesList from "../../src/components/ProgrammingLanguagesList";

describe("ProgrammingLanguagesList Component", () => {
  it("should render a list of programming languages", () => {
    const languages = ["HTML", "CSS", "JavScript", "React", "NodeJS"];
    render(<ProgrammingLanguagesList languages={languages} />);

    languages.forEach((language) => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });

  it("should render a message when list is empty", () => {
    render(<ProgrammingLanguagesList languages={[]} />);
    expect(screen.getByText(/No Programming/i)).toBeInTheDocument();
  });
});
