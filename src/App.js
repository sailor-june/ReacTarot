import "./App.scss";

import Diary from "./pages/Diary";
import Entry from "./pages/Entry";
import Reading from "./pages/Reading";
import Library from "./tarot-images";
import Signup from "./pages/Signup";

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [user, setUser] = useState(null);
  const navigate= useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (auth_user) =>{
    setUser(auth_user)
    if (auth_user.metadata.creationTime=== auth_user.metadata.lastSignInTime){ navigate('/signup')}
  });
  }, []);

  return (
    <div className="App">
      <Header user= {user} />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/draw" element={<Reading user={user} library={Library} />} />
        <Route path="/diary" element={<Diary user={user}/>} />
        <Route path="/diary/:id" element={<Entry user={user}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
