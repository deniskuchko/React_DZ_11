import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import reducer from "./reducers";
import { userReduser } from "./reducers/user";
import thunk from "redux-thunk";
//const store = createStore(reducer);
const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};

const store = createStore(
  combineReducers({ book: reducer, user: userReduser }),
  applyMiddleware(thunk, logMiddleware)
);
export default store;
