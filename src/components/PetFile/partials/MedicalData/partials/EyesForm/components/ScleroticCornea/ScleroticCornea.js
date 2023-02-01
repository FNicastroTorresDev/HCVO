import React from 'react'

const ScleroticCornea = props => {
  return (
    <div id={'scleroticCornea-section-'+props.id} className='col-6'>
      <table className='eyeTable'>
        <caption>{props.title}</caption>
        <tr>
          <small>
            <input id={'normal-'+props.id} className='custom-checkbox' type='checkbox' checked disabled name={'scle-cornea-'+props.id} value='normal'/>
            normal
          </small>
          <small>
            <input id={'edema-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='edema'/>
            edema
          </small>
          <small>
            <input id={'endotelitis-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='endotelitis'/>
            endotelitis
          </small>
        </tr>
        <tr>
          <small>
            <input id={'vasc-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='vasc'/>
            vasc.
          </small>
          <small>
            <input id={'pigm-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='pigm'/>
            pigm.
          </small>
          <small>
            <input id={'ulcera-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='ulcera'/>
            úlcera
          </small>
        </tr>
        <tr>
          <small>
            <input id={'fluorescenia-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='fluorescenia'/>
            fluorescenia
          </small>
          <small>
            <input id={'rosa-'+props.id} className='custom-checkbox' type='checkbox' disabled name={'scle-cornea-'+props.id} value='rosa'/>
            rosa de bengala
          </small>
        </tr>
      </table>
    </div>
  )
}

export default ScleroticCornea