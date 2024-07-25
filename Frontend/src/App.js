// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Student from './Student';
import Job from './Job';
import Opportunities from './Opportunities';
import OpportunitiesJob from './jobOppor'; // Import OpportunitiesJob component
import './styles.css';
import About from './About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/job" element={<Job />} />
          <Route path="/About" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/opportunities_job" element={<OpportunitiesJob />} /> {/* Add this route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
