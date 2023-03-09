import React from 'react'
import './loginForm.css'
import logo256 from '../../logo256.png'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return ( 
    <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
      <div className='d-flex'>
        <img src={logo256} alt='Logo Centro Veterinario Jujuy' className='img-logo-size' />
        <h2 className='mx-3 text-color'>Centro Veterinario Jujuy</h2>
      </div>
      <div class="mb-3">
        <label for="inputEmail" className="form-label" required>E-mail:</label>

        <input type="email" className="form-control" id="inputEmail" name='email' 
          {...register("email", {
            required: {
              value: true,
              message: 'Complete usuario.'
            },
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'El formato del mail es incorrecto'
            }
          })}
        />

        {errors.email && <span>{errors.email.message}</span>}

      </div>
      <div class="mb-3">
        <label for="inputPassword" className="form-label">Contraseña:</label>

        <input type="password" maxLength={16} className="form-control" id="inputPassword" name='password' 
        {...register("password", {
          required: {
            value: true,
            message: 'Complete contraseña.'
          },
          minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres.'
          }
        })
        } />

        {errors.password && <span>{errors.password.message}</span>} 

      </div>
      <button type="submit" className="btn custom-btn-color">Iniciar sesión</button>
    </form>
  )
}

export default LoginForm;