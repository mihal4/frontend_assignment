import { HelpType } from "../enums/helpType";
import { Contributor } from "../models/contributor";
import { Shelter } from "../models/shelter";
import * as ActionTypes from "./actions";

export type IState = {
  shelters: Shelter[];
  contributor: Contributor;
};

const initialState: IState = {
  contributor: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    value: 50,
    shelterID: undefined,
    _helpType: HelpType.Foundation,
  },
  shelters: [],
};

const reducer = (
  state = initialState,
  action: ActionTypes.ContributionActionTypes
): IState => {
  switch (action.type) {
    case ActionTypes.SET_SHELTERS:
      return {
        ...state,
        shelters: action.shelters,
      };
    case ActionTypes.SET_SHELTER_ID:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          shelterID: action.shelterID,
        },
      };
    case ActionTypes.SET_VALUE:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          value: action.amount,
        },
      };
    case ActionTypes.SET_FIRST_NAME:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          firstName: action.firstName,
        },
      };
    case ActionTypes.SET_LAST_NAME:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          lastName: action.lastName,
        },
      };
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          email: action.email,
        },
      };
    case ActionTypes.SET_PHONE:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          phone: action.phone,
        },
      };
    case ActionTypes.SET_HELP_TYPE:
      return {
        ...state,
        contributor: {
          ...state.contributor,
          _helpType: action.help,
        },
      };
    default:
      return state;
  }
};

export default reducer;
