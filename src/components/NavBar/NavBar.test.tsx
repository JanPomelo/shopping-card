import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";
describe("NavBar component", () => {
  const onButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e;
  };
  it("Render Shop Link on HomePage", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar onButtonClick={onButtonClick} page="Home" />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  });

  it("Render Home Link on ShopPage", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <NavBar onButtonClick={onButtonClick} page="Shop" />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });
});
