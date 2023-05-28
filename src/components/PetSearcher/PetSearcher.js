import React, { useState, useEffect } from 'react'
import './petSearcher.css'
import logo256 from '../../logo256.png'
import { getAllPets } from '../../services/pets'
import { useNavigate } from 'react-router-dom'

const PetSearcher = () => {
  const [ pets, setPets ] = useState([])
  const [ petsTable, setPetsTable ] = useState([])
  const [ search, setSearch ] = useState('')
  const navigate = useNavigate()

  const handleChange = event => {
    setSearch(event.target.value)
    filterTable(event.target.value)
  }

  const filterTable = searchTerm => {
    var searchResult = petsTable.filter( element => {
      if (element.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())) {
          return element
      }
    })
    setPets(searchResult)
  }

  const getPets = async () => {
    const allPets = await getAllPets()
    setPets(allPets.data)
    setPetsTable(allPets.data)
  }

  const handleClick = event => {
    const id = event.currentTarget.id
    navigate(`/medical-file/${id}`)
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <div className='my-4 custom-searcher'>
      <div className='d-flex my-2 align-items-center'>
        <img src={logo256} alt='Logo Centro Veterinario Jujuy' className='img-logo-size' />
        <h2 className='mx-3 text-color'>Centro Veterinario Jujuy</h2>
      </div>
      <div className='w-50 input-group input-group-lg custom-shadow'>
        <input 
          id='petSearcher' 
          type="text" 
          className="form-control" 
          value={search}
          placeholder='Buscar mascota o dueño'
          onChange={handleChange}
        />
        <button className="input-group-text" id="petSerchearBtn"><i class="bi bi-search"></i></button>
      </div>

      <div className='my-3 table-responsive'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th scope="col">Mascota</th>
              <th scope="col">Especie</th>
              <th scope="col">Dueño</th>
            </tr>
          </thead>

          <tbody>
            {pets && pets.map( pet => (
              <tr key={pet._id} id={pet._id} onClick={handleClick}>
                <th scope="row">{pet.name}</th>
                <td>{pet.specie}</td>
                <td>{pet.ownerFullname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PetSearcher