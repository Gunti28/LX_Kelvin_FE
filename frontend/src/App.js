// src/App.js
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage'; // update the path if necessar
import HomePage from './pages/Categories';

function App() {
  return (
    <>
    <HomePage />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     {/* Add more routes here if needed */}
    //   </Routes>
    // </Router>
);
}

export default App;


