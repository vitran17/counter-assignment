import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  const initZero = screen.getByTestId("count");
  expect(initZero).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText("+");
  userEvent.click(incrementButton);

  const display = screen.getByTestId("count");
  expect(display).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText("-");
  userEvent.click(decrementButton);

  const display = screen.getByTestId("count");
  expect(display).toHaveTextContent("-1");
});
