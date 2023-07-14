import React from "react"

const EyesForm = ({ id, title, children }) => {

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{title}</h4>
      <div>
        {React.cloneElement(children)}

        {/* se quita de la línea 12 el {isEditable: editable} que iba justo despues de children */}
      </div>
    </section>
  )
}

export default EyesForm