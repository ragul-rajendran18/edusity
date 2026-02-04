import React from 'react'
import './title.css'

const title = ({subtitle,title}) => {
  return (
    <div className='title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default title
