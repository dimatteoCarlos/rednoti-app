import React from 'react'

export const Presentacion = ({logoUrl}) => {
  return (
    <div className='presentation'>
    <img src={logoUrl} alt="light-logo" className='light-logo'/>
   < p>We are truth-seekers and storytellers. We are journalists, designers and technologists, united by a mission to inform, engage and empower the world!</p>
    </div>
  )
}