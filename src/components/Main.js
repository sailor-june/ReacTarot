
import React, { useState, useEffect } from 'react'
import { Route, Routes, } from "react-router-dom";

import Home from '../pages/Home';
import Diary from "../pages/Diary";
import Entry from "../pages/Entry";
import Reading from "../pages/Reading";
import Library from "../tarot-images";
import Signup from "../pages/Signup";
import Header from "./Header"
import Footer from "./Footer"
function Main(props) {
  const user=props.user
  const URL = "http://fortune-diary.herokuapp.com/diary"
  const [entries, setEntries] = useState([]);

  const getDiary = async() => {
    const token= await props.user.getIdToken()
    const response = await fetch(URL, {
      method: 'GET', 
      headers: {'Authorization':'Bearer '+token}
    });
    const data = await response.json();
    console.log(data)
    setEntries(data);            
  }

  useEffect(() => {
    props.user ? getDiary() : setEntries([])
  }, [props.user]);

  return (
    <div className="App">
      <Header user= {user} />
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/draw" element={<Reading user={user} library={Library} />} />
        <Route path="/diary" element={<Diary user={user} library={Library} entries={entries} getDiary={getDiary}/>} />
        <Route path="/diary/:id" element={<Entry user={user} library={Library} entries={entries}/>} />
      </Routes>
      <Footer />
    </div>
  )
}


export default Main

