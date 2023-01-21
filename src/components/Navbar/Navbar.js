import './navbar.css'
import logo from './logo256.png'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-bg-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className='logo-size' src={logo} alt="Logo Centro Veterinario Jujuy"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Historia Clínica</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar