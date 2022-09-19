import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
//pages
import Testpage from './components/Pages/TestPage/Testpage';
import Landing from './components/Pages/Landing/Landing';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Landing/> }/>
        <Route path="/TestPage" element={<Testpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
