import { PROJECT_ADD, PROJECT_TYPED, PROJECT_REMOVE } from "../constant";

export const projectAction = (payload) => {
  return {
    type: PROJECT_TYPED,
    payload: payload,
  };
};

export const projectAdd = () => {
  return {
    type: PROJECT_ADD,
  };
};

export const projectRemove = (payload) => {
  return {
    type: PROJECT_REMOVE,
    payload: payload,
  };
};
