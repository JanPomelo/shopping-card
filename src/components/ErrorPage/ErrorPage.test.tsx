import { MemoryRouter } from "react-router-dom";
import ErrorPage from "./Errorpage";
import { render, screen } from "@testing-library/react";

describe("ErrorPage component", () => {
  it("Display ErrorTest correctly", () => {
    render(
      <MemoryRouter initialEntries={["/xyz"]}>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        name: "Oops! Sorry! :(",
      })
    ).toBeInTheDocument();
  });
});
