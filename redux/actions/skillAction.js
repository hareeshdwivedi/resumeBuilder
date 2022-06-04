import { SKILL_ADD, SKILL_TYPED } from "../constant";

export const skillAction = (payload) => {

  return {
    type: SKILL_TYPED,
    payload: payload,
  };
};

export const skillAdd = (payload) => {
  return {
    type: SKILL_ADD,
    payload: payload,
  };
};
