import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Utils/StateProvider.jsx";
import Reducer, { initialState } from "./Utils/Reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} Reducer={Reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
