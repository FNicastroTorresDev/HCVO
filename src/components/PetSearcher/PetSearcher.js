import React from 'react'
import './petSearcher.css'
import logo256 from '../../logo256.png'

const PetSearcher = () => {
  return (
    <div className='custom-searcher'>
      <div className='d-flex my-2 align-items-center'>
        <img src={logo256} alt='Logo Centro Veterinario Jujuy' className='img-logo-size' />
        <h2 className='mx-3 text-color'>Centro Veterinario Jujuy</h2>
      </div>
      <div className='w-50 input-group input-group-lg custom-shadow'>
        <input id='petSearcher' type="text" className="form-control" placeholder='Buscar mascota o dueño'/>
        <button className="input-group-text" id="petSerchearBtn"><i class="bi bi-search"></i></button>
      </div>
    </div>
  )
}

export default PetSearcher