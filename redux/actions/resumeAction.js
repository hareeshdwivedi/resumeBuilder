import { RESUME_SELECT } from "../constant";

export const resumeAction = (payload) => {

  return {
    type: RESUME_SELECT,
    payload: payload,
  };
};
