import { ADD_CLICKED } from "../constant";

const initialState = [
  {
    id: 1,
    data: "Software Proficiency",
    rating: 0,
    isAdded: false,
  },
  {
    id: 2,
    data: "Decision Making",
    rating: 0,
    isAdded: false,
  },
  {
    id: 3,
    data: "Cultural Awareness",
    rating: 0,
    isAdded: false,
  },
  {
    id: 4,
    data: "Problem Solving",
    rating: 0,
    isAdded: false,
  },
  {
    id: 5,
    data: "Flexible and Adaptive",
    rating: 0,
    isAdded: false,
  },
  {
    id: 6,
    data: "Planning and Coordination",
    rating: 0,
    isAdded: false,
  },
  {
    id: 7,
    data: "Written Communication",
    rating: 0,
    isAdded: false,
  },
  {
    id: 8,
    data: "Google Woorkspace",
    rating: 0,
    isAdded: false,
  },
  {
    id: 9,
    data: "Active Listening",
    rating: 0,
    isAdded: false,
  },
  {
    id: 10,
    data: "Self Motivated",
    rating: 0,
    isAdded: false,
  },
  {
    id: 11,
    data: "Maintenance and Repair",
    rating: 0,
    isAdded: false,
  },
  {
    id: 12,
    data: "Teamwork and Collaboration",
    rating: 0,
    isAdded: false,
  },
  {
    id: 13,
    data: "Dependable and Responsible",
    rating: 0,
    isAdded: false,
  },
  {
    id: 14,
    data: "Maintenance and Repair",
    rating: 0,
    isAdded: false,
  },
  {
    id: 15,
    data: "Interpersonal Communication",
    rating: 0,
    isAdded: false,
  },
  {
    id: 16,
    data: "Teambuilding",
    rating: 0,
    isAdded: false,
  },
  {
    id: 17,
    data: "Clerical Support",
    rating: 0,
    isAdded: false,
  },
];

const skillDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLICKED:
      let old = [...state];
      let cdata = old.find((item) => item.id === action.payload);
      let mdata = { ...cdata, isAdded: !cdata.isAdded };

      let foundIndex = state.findIndex((x) => x.id == action.payload);

      old[foundIndex] = mdata;
      state = old; // hand over data to state

      return state;

    default:
      return state;
  }
};

export default skillDataReducer;
