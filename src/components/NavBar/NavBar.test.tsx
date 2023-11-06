import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e;
  };
  it("Render component correctly", () => {
    render(<NavBar onButtonClick={onButtonClick}/>);
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
  });
});
