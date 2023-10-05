import { render, screen } from "@testing-library/react";
import App from "./App";

describe("that the app loads", () => {
  it("should load app", () => {
    render(<App />);

    const element = screen.getByText("Hello Phonebook!");

    expect(element).toBeInTheDocument();
  });
});
