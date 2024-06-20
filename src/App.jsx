/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Login from "./Pages/Login/Login";
import { useStateProvider } from "./Utils/StateProvider";
import { ReducerCases } from "./Utils/Constants";
import Home from "./Pages/Home/Home";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Cursor from "./Componets/Cursor/Cursor";

import "./App.css";
const App = () => {
  const [sideBardesktop, setsideBardesktop] = useState(true);
  const sideBardesktopfunction = () => {
    setsideBardesktop((i) => !i);
  };
  return (
    <>
      <div className="main">
        <Sidebar sideBardesktop={sideBardesktop} />
        {/* <Cursor /> */}
        <Home sidebardesktopfunction={sideBardesktopfunction} />
      </div>
    </>
  );
};

export default App;
