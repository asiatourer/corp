import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import GroupTours from './components/GroupTours'; // Import GroupTours



function App() {

  return (
    <Router>
      <Header />
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/corp" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/group-tours" element={<GroupTours />} /> {/* Add GroupTours route */}
          {/* Add more pages as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;