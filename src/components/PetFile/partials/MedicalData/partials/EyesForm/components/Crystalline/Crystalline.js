import React from 'react'

const Crystalline = props => {
  return (
    <div id={'crystalline-section-'+props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input id='normal' className='custom-checkbox' type='checkbox' checked disabled name={'crystalline-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input id='subluxacion' className='custom-checkbox' type='checkbox' disabled name={'crystalline-'+props.id} value='subluxacion'/>
            subluxación
          </small>
          <small>
            <input id='escle-senil' className='custom-checkbox' type='checkbox' disabled name={'crystalline-'+props.id} value='escle-senil'/>
            esclerosis senil
          </small>
        </tr>
        <tr className='other-justi'>
          <b>luxación</b>
          <small>
            <input id='anterior' className='custom-checkbox' type='radio' disabled name={'luxacion-'+props.id} value='anterior'/>
            anterior
          </small>
          <small>
            <input id='posterior' className='custom-checkbox' type='radio' disabled name={'luxacion-'+props.id} value='posterior'/>
            posterior
          </small>
        </tr>
        <tr className='other-justi'>
          <small>
            <input id='catarata' className='custom-checkbox' type='checkbox' disabled name={'catarata-'+props.id} value='catarata'/>
            catarata
          </small>
          <p>...</p>
        </tr>
      </table>
    </div>
  )
}

export default Crystalline