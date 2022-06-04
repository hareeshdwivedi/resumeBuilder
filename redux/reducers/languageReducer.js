import { LANGUAGE_ADD, LANGUAGE_TYPED, LANGUAGE_REMOVE } from "../constant";

const initialState = [{ id: 0, language: "", rating: null }];

const initalObj = {
  id: null,
  language: "",
  rating: "",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_TYPED:
      const { target, ind } = action.payload;
      let cData = state.find((item, index) => index === ind); //selecting the exact object wrt index
      let mData = { ...cData, [target.name]: target.value }; //modifying the value coming from action
      let fData = [...state]; // copying all the existing data from state
      fData.splice(ind, 1, mData); //replacing the exact object in copied data
      state = fData; // hand over data to state
      return state;

    case LANGUAGE_ADD:
      let id = state.length;
      let old = [...state];
      // let incomingID = action.payload;
      // let index = state.find((item) => item.id === incomingID);
      old.push({ ...initalObj, id: id++ });

      return (state = old);

    case LANGUAGE_REMOVE:
      // if (action.payload !== 0) {
      let filtered = state.filter((item) => item.id !== action.payload);

      let oldData = [...filtered];
      return (state = oldData);
    default:
      return state;
  }
};

export default languageReducer;
