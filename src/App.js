import "./App.scss";

import Diary from "./pages/Diary";
import Reading from "./pages/Reading";
import { useState, useEffect } from "react";
import Library from "./tarot-images";
import { Route, Routes } from "react-router-dom";
import Entry from "./pages/Entry";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <Header user= {user} />
      <Routes>
        <Route path="/draw" element={<Reading user={user} library={Library} />} />
        <Route path="/diary" element={<Diary user={user}/>} />
        <Route path="/diary/:id" element={<Entry user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
