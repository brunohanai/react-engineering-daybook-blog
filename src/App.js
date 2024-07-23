import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./app/About";
import Header from "./app/Header";
import Home from "./app/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
