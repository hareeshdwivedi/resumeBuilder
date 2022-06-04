import { CHANGE_INPUT, CHAGNE_INPUT_VALUE_SECOND } from "../constant";
const sampleReducer = (
  state = {
    value: "",
    value2: "",
    rating: 0,
    rating2: 0,
    per: 0,
    per2: 0,
  },
  action
) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      // if (action.payload.status === 200) {

      let newState = {
        ...state,

        value: action.payload,
      };

      return newState;
    }
    case "CHANGE_INPUT_RATING": {
      // if (action.payload.status === 200) {

      let newState = {
        ...state,

        rating: action.payload,
      };

      return newState;
    }
    case CHAGNE_INPUT_VALUE_SECOND: {
      // if (action.payload.status === 200) {

      let newState = {
        ...state,

        value2: action.payload,
      };

      return newState;
    }
    case "CHANGE_INPUT_RATING_SECOND": {
      // if (action.payload.status === 200) {

      let newState = {
        ...state,

        rating2: action.payload,
      };

      return newState;
    }
    case "CHANGE_INPUT_PER": {
      // if (action.payload.status === 200) {

      let newState = {
        ...state,

        per: action.payload,
      };

      return newState;
    }
    case "CHANGE_INPUT_PER_SECOND": {
      // if (action.payload.status === 200) {

      let newState = {
        ...state,

        per2: action.payload,
      };

      return newState;
    }

    default:
      return state;
  }
};

export default sampleReducer;
