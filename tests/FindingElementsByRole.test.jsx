import React from "react";
import { render, screen } from "@testing-library/react";
import FindingElementsByRole from "../src/components/FindingElementsByRole";

describe("FindingElementsByRoles", () => {
  it("should query the link elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should query the button elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should query the footer elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should query the header elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should query the banner elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should query the img elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should query the number input elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should query the ul elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should query the list elements", () => {
    render(<FindingElementsByRole />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
