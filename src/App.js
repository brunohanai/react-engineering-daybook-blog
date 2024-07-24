import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./app/About";
import Archive from "./app/Archive";
import Header from "./app/Header";
import Post from "./app/Post";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<Archive />}></Route>
          <Route path="/:createdAt/:category/:slug/" element={<Post />}></Route>
          <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
