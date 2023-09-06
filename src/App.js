import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import SideBar from './components/SideBar';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <Router>
      <div className='flex'>
        <SideBar />
        <Routes> 
          <Route path='/useState' element={<UseState />} />
          <Route path='/useEffect' element={<UseEffect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
