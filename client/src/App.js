import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
//pages
import IndividualQuestion from "./components/Pages/IndividualQuestion/IndividualQuestion";
import Landing from "./components/Pages/Landing/Landing";
import LogNReg from "./components/Pages/LogNReg/LogNReg";
import Profile from "./components/Pages/Profile/Profile";
import Questions from "./components/Pages/Questions/Questions";
import Testpage from "./components/Pages/TestPage/Testpage";
import Auth from "./Auth";
//components
import LeftNav from "./components/subcomponents/LeftNav/LeftNav";
import TopNav from "./components/subcomponents/TopNav/TopNav";
//Context
import { RenderContext } from "./components/Contexts/RenderContext";

function App() {
  const [ShowNav, setShowNav] = useState(true);
  const [LogOut, setLogOut] = useState();

  const { render, setRender } = useContext(RenderContext);
  const hideNav = useLocation();

  return (
    <div className="App">
      {hideNav.pathname === "/LogNReg" ? null : (
        <TopNav Render={render} setRender={setRender} show={ShowNav} />
      )}

      <div className="Containers">
        <div className="LeftContentCon">
          {hideNav.pathname === "/LogNReg" ? null : (
            <LeftNav
              Render={render}
              setRender={setRender}
              setShowNav={setShowNav}
              show={ShowNav}
              LogOut={LogOut}
              setLogOut={setLogOut}
            />
          )}
        </div>

        <div className="RightContentCon">
          <Routes>
            <Route
              path="/LogNReg"
              element={
                <LogNReg
                  setShowNav={setShowNav}
                  show={ShowNav}
                  LogOut={LogOut}
                  setLogOut={setLogOut}
                />
              }
            />
            <Route path="/TestPage" element={<Testpage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/" element={<Landing />} />
            <Route
              path="/Questions"
              element={<Questions setRender={setRender} Render={render} />}
            />
            <Route
              path="/IndividualQuestion"
              element={<IndividualQuestion />}
            />
               <Route path="/auth" element={<Auth/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
