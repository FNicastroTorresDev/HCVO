import React from "react"
import EditButton from "../../../../../EditButton/EditButton"

const EyesForm = ({ id, title, children }) => {
  return (
    <section id={id} className='container card p-2 my-2 margin-fondo'>
      <summary className='fs-5'>{title}</summary>
      <div className="row">
        {children}
      </div>
      <EditButton />
    </section>
  )
}

export default EyesForm