import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='container'>
    <Link to="/draw"><div className='card'><img src="https://fortune-diary.herokuapp.com/cards/m01.jpg" alt="New reading"/></div>New reading</Link>
    <br></br>
    <Link to="/diary"><div className="card"><img src="https://fortune-diary.herokuapp.com/cards/c07.jpg" alt="Diary"/></div>Diary</Link>
    </div>
    </>

  )
}

export default Home