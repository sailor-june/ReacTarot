import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='container'>
    <Link to="/draw"><div className='card'><img src="http://localhost:4000/cards/m01.jpg" /></div>New reading</Link>
    <br></br>
    <Link to="/diary"><div className="card"><img src="http://localhost:4000/cards/c07.jpg" /></div>Diary</Link>
    </div>
    </>

  )
}

export default Home