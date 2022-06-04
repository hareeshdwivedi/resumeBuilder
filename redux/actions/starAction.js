
import {CHAGNE_INPUT_VALUE_SECOND,CHANGE_INPUT} from '../constant'

export const changeInput = (value) => {
    return {
      type: CHANGE_INPUT,
      payload: value
    };
  };
  export const changeInputValueSecond = (value2) => {
    return {
      type: CHAGNE_INPUT_VALUE_SECOND,
      payload: value2
    };
  };