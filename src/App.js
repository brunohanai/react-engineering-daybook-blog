import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./app/About";
import Archive from "./app/Archive";
import Header from "./app/Header";
import Post from "./app/Post";
import AdminSignIn from "./app/admin/AdminSignIn"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<Archive />}></Route>
          <Route path="/:createdAt/:category/:slug/" element={<Post />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/admin/login" element={<AdminSignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
