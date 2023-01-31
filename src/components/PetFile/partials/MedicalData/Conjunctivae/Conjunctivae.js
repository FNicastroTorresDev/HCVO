import React from 'react'

const Conjunctivae = props => {
  return (
    <div id={props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input type='radio' name={'fr-conjuntivae-'+props.id} className='custom-checkbox' checked disabled value='normales'/>
            normales
          </small>
          <small>
            <input type='radio' name={'fr-conjuntivae-'+props.id} className='custom-checkbox' disabled value='vasos-sup'/>
            vasos sup.
          </small>
          <small>
            <input type='radio' name={'fr-conjuntivae-'+props.id} className='custom-checkbox' disabled value='vasos-prof'/>
            vasos prof.
          </small>
        </tr>
        <tr>
          <small>
            <input type='radio' name={'sr-conjuntivae-'+props.id} className='custom-checkbox' checked disabled value='quemosis'/>
            quemosis
          </small>
          <small>
            <input type='radio' name={'sr-conjuntivae-'+props.id} className='custom-checkbox' disabled value='foliculos'/>
            folículos
          </small>
        </tr>
        <tr>
          <b>secreciones</b>
          <small>
            <input type='radio' name={'secreciones-'+props.id} className='custom-checkbox' checked disabled value='acuosas'/>
            acuosas
          </small>
          <small>
            <input type='radio' name={'secreciones-'+props.id} className='custom-checkbox' disabled value='mucoide'/>
            mucoide
          </small>
          <small>
            <input type='radio' name={'secreciones-'+props.id} className='custom-checkbox' disabled value='purulenta'/>
            purulenta
          </small>
        </tr>
      </table>
    </div>
  )
}

export default Conjunctivae