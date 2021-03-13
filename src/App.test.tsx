import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: any) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test("renders App successfully", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("app")).toBeTruthy();
});
