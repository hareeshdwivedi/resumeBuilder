import { LANGUAGE_ADD, LANGUAGE_TYPED, LANGUAGE_REMOVE } from "../constant";

export const languageAction = (payload) => {

  return {
    type: LANGUAGE_TYPED,
    payload: payload,
  };
};

export const languageAdd = () => {
  return {
    type: LANGUAGE_ADD,
  };
};

export const languageRemove = (payload) => {
  return {
    type: LANGUAGE_REMOVE,
    payload: payload,
  };
};
