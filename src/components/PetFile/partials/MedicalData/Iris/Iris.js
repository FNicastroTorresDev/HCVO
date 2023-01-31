import React from 'react'

const Iris = props => {
  return (
    <div id={props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr className='other-justi'>
          <b>color</b>
          <small>
            <input id='normal' className='custom-checkbox' type='checkbox' checked disabled name={'color-iris-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input id='otro' className='custom-checkbox' type='checkbox' disabled name={'color-iris-'+props.id} value='otro'/>
            <p>...</p>
          </small>
        </tr>
        <tr>
          <b>pupila</b>
          <small>
            <input className='custom-checkbox' type='radio' checked disabled name={'pupila-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input className='custom-checkbox' type='radio' disabled name={'pupila-'+props.id} value='irregular'/>
            irregular
          </small>
          <small>
            <input className='custom-checkbox' type='radio' disabled name={'pupila-'+props.id} value='midriasis'/>
            midriasis
          </small>
          <small>
            <input className='custom-checkbox' type='radio' disabled name={'pupila-'+props.id} value='miosis'/>
            miosis
          </small>
        </tr>
        <tr>
          <small>
            <input id='atrofia' className='custom-checkbox' type='checkbox' checked disabled name={'iris-'+props.id} value='atrofia'/>
            atrofia
          </small>
          <small>
            <input id='iridonesis' className='custom-checkbox' type='checkbox' disabled name={'iris-'+props.id} value='iridonesis'/>
            iridonesis
          </small>
          <small>
            <input id='sinequias' className='custom-checkbox' type='checkbox' disabled name={'iris-'+props.id} value='sinequias'/>
            sinequias
          </small>
          <small>
            <input id='m-pupilar' className='custom-checkbox' type='checkbox' disabled name={'iris-'+props.id} value='m-pupilar'/>
            m. pupilar
          </small>
        </tr>
      </table>
    </div>
  )
}

export default Iris