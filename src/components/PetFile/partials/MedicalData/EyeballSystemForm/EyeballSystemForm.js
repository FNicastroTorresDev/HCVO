import React from 'react'
import './eyeballSystemForm.css'

const EyeballSystemForm = props => {
  return (
    <div id={props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input checked disabled type='radio' name={'first-row-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input disabled type='radio' name={'first-row-'+props.id} value='desviado'/>
            desviado
          </small>
          <small>
            <input disabled type='radio' name={'first-row-'+props.id} value='atrofia'/>
            atrofia
          </small>
        </tr>
        <tr>
          <small>
            <input checked disabled type='radio' name={'second-row-'+props.id} value='exoft'/>
            exoft.
          </small>
          <small>
            <input disabled type='radio' name={'second-row-'+props.id} value='enoft'/>
            enoft.
          </small>
          <small>
            <input disabled type='radio' name={'second-row-'+props.id} value='microft'/>
            microft.
          </small>
          <small>
            <input disabled type='radio' name={'second-row-'+props.id} value='buft'/>
            buft.
          </small>
        </tr>
        <tr>
          <b>r.p. directo</b>
          <small>
            <input checked disabled type='radio' name={'rp-directo-'+props.id} value='dos-segs'/>
            2 seg.
          </small>
          <small>
            <input disabled type='radio' name={'rp-directo-'+props.id} value='lento'/>
            lento
          </small>
          <small>
            <input disabled type='radio' name={'rp-directo-'+props.id} value='nulo'/>
            nulo
          </small>
        </tr>
        <tr>
          <b>r.p. const. OD→OI </b>
          <small>
            <input checked disabled type='radio' name={'rp-cons-'+props.id} value='dos-segs'/>
            2 seg.
          </small>
          <small>
            <input disabled type='radio' name={'rp-cons-'+props.id} value='lento'/>
            lento
          </small>
          <small>
            <input disabled type='radio' name={'rp-cons-'+props.id} value='nulo'/>
            nulo
          </small>
        </tr>
        <tr className='other-justi'>
          <b>deambulación</b>
          <small>
            <input checked disabled type='radio' name={'deambulacion-'+props.id} value='mas'/>
            +
          </small>
          <small>
            <input disabled type='radio' name={'deambulacion-'+props.id} value='menos'/>
            -
          </small>
        </tr>
        <tr className='other-justi'>
          <b>amenaza</b>
          <small>
            <input checked disabled type='radio' name={'amenaza-'+props.id} value='mas'/>
            +
          </small>
          <small>
            <input disabled type='radio' name={'amenaza-'+props.id} value='menos'/>
            -
          </small>
        </tr>
        <tr className='other-justi'>
          <b>PIO</b>
          <p>...</p>
          <small>
            <input checked disabled type='radio' name={'pio-'+props.id} value='abajo'/>
            ↓
          </small>
          <small>
            <input disabled type='radio' name={'pio-'+props.id} value='arriba'/>
            ↑
          </small>
        </tr>
        <tr className='other-justi'>
          <b>pres. retrobul</b>
          <small>
            <input checked disabled type='radio' name={'pres-retrobul-'+props.id} value='abajo'/>
            ↓
          </small>
          <small>
            <input disabled type='radio' name={'pres-retrobul-'+props.id} value='arriba'/>
            ↑
          </small>
        </tr>
      </table>
    </div>
  )
}

export default EyeballSystemForm