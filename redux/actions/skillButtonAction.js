import { ADD_CLICKED } from "../constant";

export const skillButton = (payload) => {
  return {
    type: ADD_CLICKED,
    payload: payload,
  };
};
