import * as ActionTypes from "./actions";

export type IState = {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    value: number;
    shelterID: string | null;
  };
  helpType: string;
};

const initialState: IState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    value: 50,
    shelterID: null,
  },
  helpType: "foundation",
};

const reducer = (state = initialState, action: any): IState => {
  switch (action.type) {
    case ActionTypes.SET_SHELTER_ID:
      return {
        ...state,
        form: {
          ...state.form,
          shelterID: action.shelterId,
        },
      };
    case ActionTypes.SET_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          value: action.amount,
        },
      };
    case ActionTypes.SET_HELP_TYPE:
      return {
        ...state,
        helpType: action.help,
      };
    default:
      return state;
  }
};

export default reducer;
