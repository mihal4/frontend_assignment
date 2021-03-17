import { HelpType } from "../enums/helpType";

interface Contributor {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  value: number;
  shelterID?: number;
  _helpType: HelpType;
}

export type { Contributor };
