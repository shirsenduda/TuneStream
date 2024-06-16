/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initialState, Reducer, children }) => (
  <StateContext.Provider value={useReducer(Reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
