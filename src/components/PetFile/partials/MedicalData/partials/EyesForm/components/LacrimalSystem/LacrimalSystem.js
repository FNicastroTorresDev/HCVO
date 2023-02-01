import React from 'react'
import './lacrimalSystem.css'

const LacrimalSystem = props => {
  return (
    <div id={props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr className='other-justi'>
          <small>
            <input checked disabled type='radio' name={'first-row-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input disabled type='radio' name={'first-row-'+props.id} value='epifora'/>
            epifora
          </small>
        </tr>
        <tr className='other-justi'>
          <b>Schimer</b>
          <input className='number-custom' id='schimer' type='number' disabled />
          <small>mm/min</small>
        </tr>
        <tr className='other-justi'>
          <b>disp. fluoresc.</b>
          <input className='number-custom' id='disp-fluor' type='number' disabled />
          <small>" v.n. 15"</small>
        </tr>
        <tr className='other-justi'>
          <b>pasaje de fluor</b>
          <input className='number-custom' id='pasaje-fluor' type='number' disabled />
          <small>' v.n. 1-5'</small>
        </tr>
        <tr className='other-justi'>
          <b>puntos</b>
          <small>
            <input checked disabled type='radio' name={'puntos-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input disabled type='radio' name={'puntos-'+props.id} value='other'/>
            ...
          </small>
        </tr>
        <tr className='other-justi'>
          <b>cateterismo</b>
          <small>
            <input checked disabled type='radio' name={'cateterismo-'+props.id} value='mas'/>
            +
          </small>
          <small>
            <input disabled type='radio' name={'cateterismo-'+props.id} value='menos'/>
            -
          </small>
        </tr>
      </table>
    </div>
  )
}

export default LacrimalSystem