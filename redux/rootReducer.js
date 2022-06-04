import { combineReducers } from "redux";
import certReducer from "./reducers/certReducer";

import inputReducer from "./reducers/inputReducer";

import languageReducer from "./reducers/languageReducer";

import skillReducer from "./reducers/skillReducer";

import projectReducer from "./reducers/projectReducer";
import skillDataReducer from "./reducers/skillDatareducer";

import resumeReducer from "./reducers/resumeReducer";
import sampleReducer from "./reducers/starReducer";

export const rootReducer = combineReducers({
  inputs: inputReducer,

  skills: skillReducer,



  languages: languageReducer,
  certificates: certReducer,
  projects: projectReducer,
  skills_data: skillDataReducer,

  resume:resumeReducer,
  sampleData: sampleReducer,

});
