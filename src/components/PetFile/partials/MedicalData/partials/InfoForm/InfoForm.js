import React from "react"
import EditButton from "../../../../../EditButton/EditButton"
import './infoForm.css'

const InfoForm = ({ id, title }) => {
  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{title}</h4>
      <textarea name={id} type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis" disabled />
      <EditButton />
    </section>
  )
}

export default InfoForm