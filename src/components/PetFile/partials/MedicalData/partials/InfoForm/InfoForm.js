import React, { useState } from "react"
import EditButton from "../../../../../EditButton/EditButton"
import { useForm } from 'react-hook-form'
import './infoForm.css'

const InfoForm = ({ id, idForm, title, toShow }) => {
  const [editable, setEditable] = useState(false)
  const { register, handleSubmit  } = useForm({
    defaultValues: {
      textArea: 'Hola, esto es un ejemplo.'
    }
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>{title}</h4>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center">
        <textarea disabled={!editable} {...register('textArea')}>
          
        </textarea>
      </form>
      <EditButton idForm={idForm} isEditable={setEditable} />
    </section>
  )
}

export default InfoForm