import { RESUME_SELECT } from "../constant";
import { templateData } from '../../components/data/templateData';

const initialState = 0

const resumeReducer = (state = initialState, action) => {

  switch (action.type) {
    case RESUME_SELECT:
      state = action.payload;

    default:
      return state;
  }
};

export default resumeReducer;
