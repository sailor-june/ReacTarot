import React from 'react'
import {logIn, logOut} from '../firebase'
import { Link } from 'react-router-dom'
function Header(props) {
  return (
    <div className='header'>
        { props.user ?
        <button onClick={logOut}>logout</button>
         :
        <button onClick={logIn}>login</button> }
    <Link to="/"><button>home</button></Link>
    </div>
  )
}

export default Header