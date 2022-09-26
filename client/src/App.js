import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
//pages
import Testpage from './components/Pages/TestPage/Testpage';
import Landing from './components/Pages/Landing/Landing';
import LogNReg from './components/Pages/LogNReg/LogNReg';
import Profile from './components/Pages/Profile/Profile';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<LogNReg/>}/>
        <Route path="/TestPage" element={<Testpage/>}/>
        <Route path="/Profile" element={<Profile/>}/>

      </Routes>
    </div>
  );
}

export default App;
