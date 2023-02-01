import React from 'react'

const EyelidsForm = props => {
  return (
    <div id={'eyelids-section-'+props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input id={'normales-'+props.id} type='checkbox' className='custom-checkbox' checked disabled name={'parpados-'+props.id} value='normales'/>
            normales
          </small>
          <small>
            <input id={'triquiasis-'+props.id} type='checkbox' className='custom-checkbox' disabled name={'parpados-'+props.id} value='triquiasis'/>
            triquiasis
          </small>
          <small>
            <input id={'distiquiasis-'+props.id} type='checkbox' className='custom-checkbox' disabled name={'parpados-'+props.id} value='distiquiasis'/>
            distiquiasis
          </small>
        </tr>
        <tr>
          <small>
            <input id={'entropion-'+props.id} type='checkbox' className='custom-checkbox' checked disabled name={'parpados-'+props.id} value='entropion'/>
            entropión
          </small>
          <small>
            <input id={'electropion-'+props.id} type='checkbox' className='custom-checkbox' disabled name={'parpados-'+props.id} value='electropion'/>
            electropión
          </small>
          <small>
            <input id={'blefarospasmo-'+props.id} type='checkbox' className='custom-checkbox' disabled name={'parpados-'+props.id} value='blefarospasmo'/>
            blefarospasmo
          </small>
        </tr>
      </table>
    </div>
  )
}

export default EyelidsForm