import Navbar from "./Navbar";
import Home from "./Home";
import Details from "./Details";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:movieId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
