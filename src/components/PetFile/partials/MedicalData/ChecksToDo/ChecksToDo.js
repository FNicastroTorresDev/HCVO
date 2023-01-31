import React from 'react'

const ChecksToDo = props => {
  return (
    <div id={'estudios-section-'+props.id} className='col-12'>
      <table className='eyeTable'>
        <td rowSpan='2'>
          <b>análisis</b>
        </td>
        <tr>
          <small>
            <input id='hemograma' className='custom-checkbox' type='checkbox' disabled name='estudios' value='hemograma'/>
            hemograma    
          </small>
          <small>
            <input id='uremia' className='custom-checkbox' type='checkbox' disabled name='estudios' value='uremia'/>
            uremia    
          </small>
          <small>
            <input id='creatinina' className='custom-checkbox' type='checkbox' disabled name='estudios' value='creatinina'/>
            creatinina    
          </small>
          <small>
            <input id='glucemia' className='custom-checkbox' type='checkbox' disabled name='estudios' value='glucemia'/>
            glucemia    
          </small>
          <small>
            <input id='got' className='custom-checkbox' type='checkbox' disabled name='estudios' value='got'/>
            GOT    
          </small>
          <small>
            <input id='gpt' className='custom-checkbox' type='checkbox' disabled name='estudios' value='gpt'/>
            GPT    
          </small>
          <small>
            <input id='fas' className='custom-checkbox' type='checkbox' disabled name='estudios' value='fas'/>
            FAS    
          </small>
          <small>
            <input id='pif-vif-vilef' className='custom-checkbox' type='checkbox' disabled name='estudios' value='pif-vif-vilef'/>
            PIF-VIF-VILEF    
          </small>
        </tr>
        <tr>
          <small>
            <input id='toxoplasmosis' className='custom-checkbox' type='checkbox' disabled name='estudios' value='toxoplasmosis'/>
            toxoplasmosis    
          </small>
          <small>
            <input id='leptospirosis' className='custom-checkbox' type='checkbox' disabled name='estudios' value='leptospirosis'/>
            leptospirosis    
          </small>
          <small>
            <input id='criptococosis' className='custom-checkbox' type='checkbox' disabled name='estudios' value='criptococosis'/>
            criptococosis    
          </small>
          <small>
            <input id='neosporidiosis' className='custom-checkbox' type='checkbox' disabled name='estudios' value='neosporidiosis'/>
            neosporidiosis    
          </small>
          <small>
            <input id='brucelosis' className='custom-checkbox' type='checkbox' disabled name='estudios' value='brucelosis'/>
            brucelosis    
          </small>
          <small>
            <input id='lehismaniasis' className='custom-checkbox' type='checkbox' disabled name='estudios' value='lehismaniasis'/>
            lehismaniasis    
          </small>
        </tr>
        <tr className='other-justi'>
          <small>
            <input id='ecografia' className='custom-checkbox' type='checkbox' disabled name='estudios' value='ecografia'/>
            ecografía    
          </small>
          <p>...</p>
        </tr>
        <tr className='other-justi'>
          <small>
            <input id='electro' className='custom-checkbox' type='checkbox' disabled name='estudios' value='electro'/>
            electrocardiograma: evaluar riesgos    
          </small>
          <p>...</p>
        </tr>
      </table>
    </div>
  )
}

export default ChecksToDo