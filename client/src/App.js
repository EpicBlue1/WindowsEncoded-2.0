import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//pages
import IndividualQuestion from "./components/Pages/IndividualQuestion/IndividualQuestion";
import Landing from "./components/Pages/Landing/Landing";
import LogNReg from "./components/Pages/LogNReg/LogNReg";
import Profile from "./components/Pages/Profile/Profile";
import Questions from "./components/Pages/Questions/Questions";
import Testpage from "./components/Pages/TestPage/Testpage";
//components
import LeftNav from "./components/subcomponents/LeftNav/LeftNav";
import TopNav from "./components/subcomponents/TopNav/TopNav";

function App() {
  const [ShowNav, setShowNav] = useState(true);
  const [LogOut, setLogOut] = useState();

  useEffect(() => {
    if (window.location.href.indexOf("LogNReg") > -1) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, []);

  return (
    <div className="App">
      <TopNav show={ShowNav} />

      <div className="LeftContentCon">
        <LeftNav
          setShowNav={setShowNav}
          show={ShowNav}
          LogOut={LogOut}
          setLogOut={setLogOut}
        />
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
          <Route path="/Questions" element={<Questions />} />
          <Route path="/IndividualQuestion" element={<IndividualQuestion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
