import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { fetchUsers, setUser } from "./lib/store/usersSlice";
import logo from './logo.svg';
import './App.css';
import About from "./app/About";
import Archive from "./app/Archive";
import Header from "./app/Header";
import Post from "./app/Post";
import AdminSignIn from "./app/admin/AdminSignIn"
import AdminPost from "./app/admin/AdminPost"

function App() {
  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user) => {
    if (user) {
        const info = {id: user.uid, email: user.email};
        dispatch(setUser(info));
    } else {
        dispatch(setUser(null));
    }
  });

  const user = useSelector(fetchUsers);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index path="/" element={<Archive />} />

        <Route path="/about" element={<About />} />
        <Route path="/:createdAt/:category/:slug/" element={<Post />} />

        {/* TODO: Controlar de acordo com login */}
        { user.currentUser ? <Route path="/admin/post" element={<AdminPost />} /> : <Route path="/admin/login" element={<AdminSignIn />} /> }
      </Routes>
    </div>
  );
}

export default App;
