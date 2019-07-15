import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
// FOR REDUX STORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// IMPORT STYLE
import "./Style/nave.css";
import "./Style/homepage.css";
import "./Style/contact.css";
import "./Style/post.css";
import "./Style/footer.css";
import "./Style/about.css";
// IMPORT REDUCERS
import reducers from "./Reducers";

axios.defaults.baseURL =
  "http://localhost:5001/project-x-ba483/us-central1/api";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
