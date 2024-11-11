import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to the Website!</h1>
        <p>This is the main content area where your content will go.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
