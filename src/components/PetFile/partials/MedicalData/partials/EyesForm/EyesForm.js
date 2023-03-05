import React from "react"
import EditButton from "../../../../../EditButton/EditButton"

const EyesForm = props => {
  return (
    <section id={props.id} className='container card p-2 my-2 margin-fondo'>
      <summary className='fs-5'>{props.title}</summary>
      <div className="row">
        {props.children}
      </div>
      <EditButton />
    </section>
  )
}

export default EyesForm