import { HelpType } from "../enums/helpType";
import { Shelter } from "../models/shelter";

export const SET_SHELTERS = "SET_SHELTERS";
export const SET_SHELTER_ID = "SET_SHELTER_ID";
export const SET_HELP_TYPE = "SET_HELP_TYPE";
export const SET_VALUE = "SET_VALUE";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PHONE = "SET_PHONE";

interface ISetShelters {
  type: typeof SET_SHELTERS;
  shelters: Shelter[];
}

interface ISetShelterId {
  type: typeof SET_SHELTER_ID;
  shelterID: number | undefined;
}

interface ISetHelpType {
  type: typeof SET_HELP_TYPE;
  help: HelpType;
}

interface ISetValue {
  type: typeof SET_VALUE;
  amount: number;
}

interface ISetFirstName {
  type: typeof SET_FIRST_NAME;
  firstName: string;
}

interface ISetLastName {
  type: typeof SET_LAST_NAME;
  lastName: string;
}

interface ISetEmail {
  type: typeof SET_EMAIL;
  email: string;
}

interface ISetPhone {
  type: typeof SET_PHONE;
  phone: string;
}

export type ContributionActionTypes =
  | ISetShelters
  | ISetShelterId
  | ISetHelpType
  | ISetValue
  | ISetFirstName
  | ISetLastName
  | ISetEmail
  | ISetPhone;
