import React from 'react'
import './tocList.css'

const TocList = () => {

  const TOCList = [
    {ref: 'anamnesis', name: 'Anamnesis'},
    {ref: 'inicio', name: 'Inicio'},
    {ref: 'course', name: 'Curso'},
    {ref: 'vision', name: 'Visión'},
    {ref: 'tratEvo', name: 'Tratamientos evolución'},
    {ref: 'sistGloboOcular', name: 'Sistema globo ocular'},
    {ref: 'areaOrbital', name: 'Área orbital'},
    {ref: 'sistLagrimal', name: 'Sistema lagrimal'},
    {ref: 'parpados', name: 'Párpados'},
    {ref: 'tercerParpado', name: 'Tercer párpado'},
    {ref: 'conjuntivas', name: 'Conjuntivas'},
    {ref: 'corneaEscle', name: 'Córnea esclerótica'},
    {ref: 'iris', name: 'Iris'},
    {ref: 'camAntYPost', name: 'Cámaras anterior y posterior'},
    {ref: 'cristalino', name: 'Cristalino'},
    {ref: 'esquema', name: 'Esquema'},
    {ref: 'estudiosARealizar', name: 'Estudios a realizar'},
    {ref: 'diagnostico', name: 'Diagnóstico'},
    {ref: 'pronostico', name: 'Pronóstico'},
    {ref: 'tratamiento', name: 'Tratamiento'}
  ]

  return (
    <nav id="toc-list" className='card custom-shadow custom-lg-position'>
      <ul className='toc-ul'>
        {TOCList.map( item => (
          <li className='toc-li'>
            <a className='toc-link' href={`#${item.ref}`}>
              {item.name}
            </a>
          </li>
        ))}        
      </ul>
    </nav>
  )
}

export default TocList