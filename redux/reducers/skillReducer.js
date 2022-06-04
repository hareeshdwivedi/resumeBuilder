import { SKILL_ADD, SKILL_TYPED } from "../constant";

const initialState = [];

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL_TYPED:
      const { target, ind } = action.payload;

      let coData = state.find((item) => item.id === ind); //selecting the exact object wrt index

      let cData = { ...coData };

      let mData = { ...cData, [target.name]: target.value }; //modifying the value coming from action

      let fData = [...state]; // copying all the existing data from state

      let foundIndex = state.findIndex((x) => x.id == cData.id);

      fData[foundIndex] = mData;
      state = fData; // hand over data to state

      return state;

    case SKILL_ADD:
      const targetD = action.payload;
      let check = state.find((item) => item.id === targetD.id);

      if (check == undefined) {
        let clone = [...state];
        clone.push(targetD);
        state = clone;
        return state;
      } else {
        let old = [...state];
        let filter = old.filter((item) => item.id !== targetD.id);
        state = [...filter];
        return state;
      }

    default:
      return state;
  }
};

export default languageReducer;
