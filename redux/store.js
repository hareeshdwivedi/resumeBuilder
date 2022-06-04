import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
// );

export const store = createStore(rootReducer);
