import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-think";
import rootReducer from "./reducers";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  compose(
    appleMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  )
);

export default store;
