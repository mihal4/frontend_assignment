import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App successfully", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("app")).toBeTruthy();
});
