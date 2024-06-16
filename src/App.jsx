/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Login from "./Pages/Login/Login";
import { useStateProvider } from "./Utils/StateProvider";
import { ReducerCases } from "./Utils/Constants";
import Home from "./Pages/Home/Home";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Rightside from "./Componets/Rightside/Rightside";
import Cursor from "./Componets/Cursor/Cursor";
import "./App.css";
const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: ReducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return (
    <>
      {token ? (
        <>
        
        <div className="main">
            <Sidebar />
            {/* <Cursor /> */}
            <Home />
            <Rightside />
          </div>
          
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
