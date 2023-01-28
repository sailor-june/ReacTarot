import React from 'react'
import {logIn, logOut} from '../firebase'
function Header(props) {
  return (
    <div className='header'>
        { props.user ?
        <button onClick={logOut}>logout</button>
         :
        <button onClick={logIn}>login</button> }
    
    </div>
  )
}

export default Header