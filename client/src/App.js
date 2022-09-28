import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
//pages
import Testpage from './components/Pages/TestPage/Testpage';
import Landing from './components/Pages/Landing/Landing';
import LogNReg from './components/Pages/LogNReg/LogNReg';
import Profile from './components/Pages/Profile/Profile';
import Questions from './components/Pages/Questions/Questions';
import IndividualQuestion from './components/Pages/IndividualQuestion/IndividualQuestion';
//components
import LeftNav from './components/subcomponents/LeftNav/LeftNav';
import TopNav from './components/subcomponents/TopNav/TopNav';

function App() {
  return (
    <div className='App'>
      <TopNav/>
      <LeftNav/>
      <div className='Content'>
        <Routes>
          <Route path="/" element={<LogNReg/>}/>
          <Route path="/TestPage" element={<Testpage/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Landing" element={<Landing/>}/>
          <Route path="/Questions" element={<Questions/>}/> 
          <Route path="/IndividualQuestion" element={<IndividualQuestion/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
