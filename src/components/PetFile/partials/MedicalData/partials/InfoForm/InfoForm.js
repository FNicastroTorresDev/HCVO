import React from "react"
import EditButton from "../../../../../EditButton/EditButton"
import './infoForm.css'

const InfoForm = props => {
  return (
    <section id={props.id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{props.title}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
      <EditButton />
    </section>
  )
}

export default InfoForm