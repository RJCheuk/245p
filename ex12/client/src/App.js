import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Header />
      <nav>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
