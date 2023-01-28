import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import EntryCard from '../components/EntryCard'




function Diary(props) {
  const [entries, setEntries] = useState(null);
  const URL = "http://localhost:4000/diary"
  
  


const getDiary = async() => {
  const token= await props.user.getIdToken()
  const response = await fetch(URL, {
    method: 'GET',
    headers: {'Authorization':'Bearer '+token}
  });
  const data = await response.json();
  setEntries(data);            
}

props.user? useEffect(() => {
  getDiary();
},[props.user]):setEntries(null)


const loaded = () => {
  return entries.map((entry) => (
    <EntryCard entry={ entry }/>
  ));
};

const loading = () => {
  return <h1>Loading...</h1>;
};

  return (
    <div className='container'>
      {entries ? loaded() : loading()}
    </div>
  )
}

export default Diary