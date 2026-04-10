import React from 'react'
import './Container.css'

function Container({children}) {
  return (
    <div className='main'>
        {children}
    </div>
  )
}

export default Container