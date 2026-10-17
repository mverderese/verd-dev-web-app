import { fireEvent, render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";

function renderHeader(path = "/") {
  const Stub = createRoutesStub([{ path: "*", Component: SiteHeader }]);
  render(<Stub initialEntries={[path]} />);
}

describe("SiteHeader", () => {
  it("marks the current section", () => {
    renderHeader("/work");
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
  });

  it("toggles the menu and closes it with Escape", () => {
    renderHeader();
    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the resume in a new tab", () => {
    renderHeader();
    expect(screen.getByRole("link", { name: /Resume/ })).toHaveAttribute("target", "_blank");
  });
});
