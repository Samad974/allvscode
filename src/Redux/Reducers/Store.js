import { createStore, combineReducers } from "redux";
import { studentreducer } from "./studentsreducers";
import { staffReduccers } from "../staffReduccers";

export const configureStore = () => {
  const store = createStore(
    combineReducers({ studentreducer,staffReduccers }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


  return store;
};
