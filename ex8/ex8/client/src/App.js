import React from 'react';
import "./App.css";
import Header from "./Header";
import MainContent from './MainContent';
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent /> {/* Use MainContent component here */}
      <Footer />
    </div>
  );
}

export default App;
