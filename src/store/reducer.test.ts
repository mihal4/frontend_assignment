import reducer from "./reducer";
import { HelpType } from "../enums/helpType";
import { SET_HELP_TYPE, SET_VALUE } from "./actions";

describe("Reducer", () => {
  it("should handle SET_VALUE", () => {
    expect(reducer(undefined, { type: SET_VALUE, amount: 60 })).toEqual({
      contributor: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        value: 60,
        shelterID: undefined,
        _helpType: HelpType.Foundation,
      },
      shelters: [],
    });
  });

  it("should handle SET_HELP_TYPE", () => {
    expect(
      reducer(undefined, { type: SET_HELP_TYPE, help: HelpType.Shelter })
    ).toEqual({
      contributor: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        value: 50,
        shelterID: undefined,
        _helpType: HelpType.Shelter,
      },
      shelters: [],
    });
  });
});
