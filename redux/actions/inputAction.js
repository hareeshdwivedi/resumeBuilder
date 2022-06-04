import { INPUT_TYPED, PROFILE_IMG } from "../constant";

export const inputAction = (payload) => {
  return {
    type: INPUT_TYPED,
    payload: payload,
  };
};
export const profile_imgAction = (payload) => {
  return {
    type: PROFILE_IMG,
    payload: payload,
  };
};
