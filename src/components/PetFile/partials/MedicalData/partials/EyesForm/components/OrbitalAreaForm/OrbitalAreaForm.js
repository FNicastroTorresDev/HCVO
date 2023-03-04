import React from 'react'

const OrbitalAreaForm = props => {
  return (
    <div id={'orbitalArea-section-'+props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>ganglio mandibular</small>
          <p>...</p>
        </tr>
      </table>
    </div>
  )
}

export default OrbitalAreaForm