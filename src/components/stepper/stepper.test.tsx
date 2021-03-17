import React from "react";
import { render } from "@testing-library/react";
import Stepper from "./stepper";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        // eslint-disable-next-line
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test("renders Stepper successfully", () => {
  const { queryByTestId } = render(<Stepper currentStep={1} />);
  expect(queryByTestId("stepper")).toBeTruthy();
});
