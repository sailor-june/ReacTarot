import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Entry(props){
  const data= props.data.entry
const [entry, setEntry]=useState({data})
  return (
    <div>{entry}
    </div>
  )
}

export default Entry