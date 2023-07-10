import { NavLink } from 'react-router-dom'
import logo from './logo256.png'
import './navbar.css'

const Navbar = ({ isLogged }) => {
  // const path = window.location.pathname 

  const closeSession = () => {
    window.localStorage.clear('accesstoken')
    window.localStorage.clear('user')
    window.location.replace('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-bg-color">
      <div className="container-fluid d-flex justify-content-between">
        <div className='d-flex align-items-center'>
          <NavLink className="navbar-brand" exact to={'/'}><img className='logo-size' src={logo} alt="Logo Centro Veterinario Jujuy"/></NavLink>
          {isLogged && <ul className='d-flex'>
              <button className='dropdown-item me-2' onClick={closeSession}>Cerrar sesión</button>
              <NavLink className="dropdown-item ms-2" exact to={'/admin-owner'}>
                Administrar Dueños
              </NavLink>
            </ul>}
        </div>
        <h1 className='fs-4'>Historial clínico de oftalmología</h1>
      </div>
    </nav>
  )
}

export default Navbar