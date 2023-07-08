import React, { useState, useEffect } from "react"
import EditButton from "../../../../../EditButton/EditButton"
import { useForm } from 'react-hook-form'
import './infoForm.css'

const InfoForm = ({ id, idForm, title, toShow, editData }) => {
  const [editable, setEditable] = useState(false)
  const { register, handleSubmit, reset  } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || { textArea: 'Sin datos todavía.' });
  }, [reset, toShow]);

  const onSubmit = data => {
    editData(id, data)
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