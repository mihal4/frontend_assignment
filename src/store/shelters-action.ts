import axios from "axios";
import { API_URL } from "../config";
import { Dispatch } from "react";
import { ContributionActionTypes, SET_SHELTERS } from "./actions";

export const fetchShelters = () => async (
  dispatch: Dispatch<ContributionActionTypes>
): Promise<void> => {
  const res = await axios.get(`${API_URL}/shelters`);
  dispatch({
    type: SET_SHELTERS,
    shelters: res.data.shelters,
  });
};
