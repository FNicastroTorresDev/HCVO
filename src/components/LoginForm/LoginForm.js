import React from 'react'
import './loginForm.css'
import logo256 from '../../logo256.png'

const LoginForm = () => {
  return ( 
    <form className="custom-form">
      <div className='d-flex'>
        <img src={logo256} alt='Logo Centro Veterinario Jujuy' className='img-logo-size' />
        <h2 className='mx-3 text-color'>Centro Veterinario Jujuy</h2>
      </div>
      <div class="mb-3">
        <label for="inputEmail" className="form-label">E-mail:</label>
        <input type="email" className="form-control" id="inputEmail" />
      </div>
      <div class="mb-3">
        <label for="inputPassword" className="form-label">Contraseña:</label>
        <input type="password" className="form-control" id="inputPassword" />
      </div>
      <button type="submit" className="btn custom-btn-color">Iniciar sesión</button>
    </form>
  )
}

export default LoginForm;