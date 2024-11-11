import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import ExampleDataView from "./ExampleDataView";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<ExampleDataView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


