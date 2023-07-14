import React from "react"
import { useFormContext } from 'react-hook-form'
import './infoForm.css'

const InfoForm = ({ id, title }) => {
  const { register } = useFormContext()

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{title}</h4>
      <div className="d-flex justify-content-center">
        <textarea {...register(`${id}.textArea`)}>
        </textarea>
      </div>
    </section>
  )
}

export default InfoForm