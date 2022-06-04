import { INPUT_TYPED, PROFILE_IMG } from "../constant";

const initialState = {
  fname: "",
  lname: "",
  profession: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  phone: "",
  summary: "",
  skill: [],
  extra: "",
  profileImg: "/avatar.jpg",
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TYPED:

      return { ...state, [action.payload.name]: action.payload.value };
    case PROFILE_IMG:
      return {
        ...state,
        profileImg: URL.createObjectURL(action.payload.files[0]),
      };
    default:
      return state;
  }
};

export default inputReducer;
