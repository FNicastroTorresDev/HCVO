import React from 'react'
import EditButton from '../../../../../EditButton/EditButton'
import './courseChecks.css'

const CourseChecks = () => {
  return (
    <section id='curso' className='card p-2 my-2 margin-fondo'>
      <summary className='fs-5'>Curso</summary>
      <div className='d-flex justify-content-between'>
      <small>
        <input id='agudo' className="custom-checkbox" type="checkbox" checked disabled name='curso' value='agudo'/>
        agudo
      </small>
      <small>
        <input id='cronico' className="custom-checkbox" type="checkbox" disabled name='curso' value='cronico'/>
        crónico
      </small>
      <small>
        <input id='incrementado' className="custom-checkbox" type="checkbox" disabled name='curso' value='incrementado'/>
        incrementado
      </small>
      <small>
        <input id='reducido' className="custom-checkbox" type="checkbox" disabled name='curso' value='reducido'/>
        reducido
      </small>
      <small>
        <input id='estatico' className="custom-checkbox" type="checkbox" disabled name='curso' value='estatico'/>
        estático
      </small>
      <small>
        <input id='recurrencia' className="custom-checkbox" type="checkbox" disabled name='curso' value='recurrencia'/>
        recurrencia
      </small>
      </div>
      <small className='d-flex'>
        <input id='enfer-general' className="custom-checkbox" type="checkbox" disabled name='curso' value='enfer-general'/>
        enfermedad general: 
        <p className='mx-2'>Lorem ipsum...</p>
      </small>
      <EditButton />
    </section>
  )
}

export default CourseChecks