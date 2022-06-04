import { CERT_ADD, CERT_TYPED, CERT_REMOVE } from "../constant";

const initialState = [
  {
    cert_name: "",
    cert_date: null,
  },
];

const initalObj = {
  cert_name: "",
  cert_date: null,
};

const certReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERT_TYPED:
      let mData;

      const { target, ind } = action.payload;
      let cData = state.find((item, index) => index === ind); //selecting the exact object wrt index

      mData = { ...cData, [target.name]: target.value }; //modifying the value coming from action

      let fData = [...state]; // copying all the existing data from state
      fData.splice(ind, 1, mData); //replacing the exact object in copied data
      state = fData; // hand over data to state
      return state;

    case CERT_ADD:
      let id = state.length;
      let old = [...state];
      // let incomingID = action.payload;
      // let index = state.find((item) => item.id === incomingID);
      old.push({ ...initalObj, id: id++ });

      return (state = old);
    case CERT_REMOVE:
      // if (action.payload !== 0) {
      let filtered = state.filter((item) => item.id !== action.payload);

      let oldData = [...filtered];
      return (state = oldData);
    default:
      return state;
  }
};

export default certReducer;
