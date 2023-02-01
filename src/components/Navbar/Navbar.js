import { NavLink } from 'react-router-dom'
import logo from './logo256.png'
import './navbar.css'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-bg-color">
      <div className="container-fluid d-flex justify-content-between">
        <NavLink className="navbar-brand" exact to={'/'}><img className='logo-size' src={logo} alt="Logo Centro Veterinario Jujuy"/></NavLink>
        <h1 className='fs-4'>Historial clínico de oftalmología</h1>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Historia Clínica</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar