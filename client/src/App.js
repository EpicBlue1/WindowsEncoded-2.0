import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
//pages
import Testpage from './components/Pages/TestPage/Testpage';
import Landing from './components/Pages/Landing/Landing';
import LogNReg from './components/Pages/LogNReg/LogNReg';
import Profile from './components/Pages/Profile/Profile';
import Questions from './components/Pages/Questions/Questions';
import IndividualQuestion from './components/Pages/IndividualQuestion/IndividualQuestion';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<LogNReg/>}/>
        <Route path="/TestPage" element={<Testpage/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Questions" element={<Questions/>}/> 
        <Route path="/IndividualQuestion" element={<IndividualQuestion/>}/>
      </Routes>
    </div>
  );
}

export default App;
