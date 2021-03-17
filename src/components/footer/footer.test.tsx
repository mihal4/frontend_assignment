import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      // eslint-disable-next-line
      t: (str: any) => str,
      i18n: {
        // eslint-disable-next-line
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test("renders Footer successfully", () => {
  const { queryByTestId } = render(<Footer />);
  expect(queryByTestId("footer")).toBeTruthy();
});
