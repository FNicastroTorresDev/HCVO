import React from "react"
import EditButton from "../../../../../EditButton/EditButton"

const EyesForm = ({ id, title, children }) => {
  return (
    <section id={props.id} className='container card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{props.title}</h4>
      <div className="row">
        {children}
      </div>
      <EditButton />
    </section>
  )
}

export default EyesForm