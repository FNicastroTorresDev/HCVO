import React from "react"
import EditButton from "../../../../EditButton/EditButton"
import './infoForm.css'

const InfoForm = props => {
  return (
    <details id={props.id} className='card p-2 my-2 margin-fondo'>
      <summary className='fs-5'>{props.title}</summary>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
      <EditButton />
    </details>
  )
}

export default InfoForm