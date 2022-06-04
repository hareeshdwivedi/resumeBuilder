import { CERT_ADD, CERT_TYPED, CERT_REMOVE } from "../constant";

export const certAction = (payload) => {
  return {
    type: CERT_TYPED,
    payload: payload,
  };
};

export const certAdd = () => {
  return {
    type: CERT_ADD,
  };
};
export const certRemove = (payload) => {
  return {
    type: CERT_REMOVE,
    payload: payload,
  };
};
