import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// FOR REDUX STORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// IMPORT STYLE
import "./Style/nave.css";
import "./Style/homepage.css";

// IMPORT REDUCERS
import reducers from "./Reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
