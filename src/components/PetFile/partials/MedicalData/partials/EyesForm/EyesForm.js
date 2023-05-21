import React, { useState } from "react"
import EditButton from "../../../../../EditButton/EditButton"

const EyesForm = ({ id, title, children, idForm }) => {

  const [editable, setEditable] = useState(false)

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{title}</h4>
      <div>
        {React.cloneElement(children, {isEditable: editable})}
      </div>
      <EditButton idForm={idForm} isEditable={setEditable} />
    </section>
  )
}

export default EyesForm