import React from 'react'

const AnterPosterCameras = props => {
  return (
    <div id={'an-pos-cams-section-'+props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input id='normal' className='custom-checkbox' type='checkbox' checked disabled name={'ant-poster-cams-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input id='desviado' className='custom-checkbox' type='checkbox' disabled name={'ant-poster-cams-'+props.id} value='desviado'/>
            desviado
          </small>
          <small>
            <input id='atrofia' className='custom-checkbox' type='checkbox' disabled name={'ant-poster-cams-'+props.id} value='atrofia'/>
            atrofia
          </small>
          <small>
            <input id='exoft' className='custom-checkbox' type='checkbox' disabled name={'ant-poster-cams-'+props.id} value='exoft'/>
            exoft.
          </small>
        </tr>
      </table>
    </div>
  )
}

export default AnterPosterCameras