import React from 'react'

const ThirdEyelid = props => {
  return (
    <div id={props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input type='radio' name={'tercer-parp-'+props.id} className='custom-checkbox' checked disabled value='protr-glan'/>
            protr. glan.
          </small>
          <small>
            <input type='radio' name={'tercer-parp-'+props.id} className='custom-checkbox' disabled value='hipertr-glan'/>
            hipertr. glan.
          </small>
          <small>
            <input type='radio' name={'tercer-parp-'+props.id} className='custom-checkbox' disabled value='reversion'/>
            reversión
          </small>
        </tr>
      </table>
    </div>
  )
}

export default ThirdEyelid