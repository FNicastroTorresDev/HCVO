import React, { useState, useEffect } from 'react'
import './petSearcher.css'
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
      if (
        element.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) ||
        element.ownerLastname.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
        ) {
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
      
      <div className='w-100 input-group input-group-lg custom-shadow'>
        <input 
          id='petSearcher' 
          type="text" 
          className="form-control" 
          value={search}
          placeholder='Apellido o Mascota'
          onChange={handleChange}
        />
        <button className="input-group-text" id="petSerchearBtn"><i class="bi bi-search"></i></button>
      </div>

      <div className='my-3 table-responsive'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th scope="col">Dueño</th>
              <th scope="col">Mascota</th>
              <th scope="col">Especie</th>
            </tr>
          </thead>

          <tbody className='custom-tbody'>
            {pets && pets.map( pet => (
              <tr className='cursor-pointer' key={pet._id} id={pet._id} onClick={handleClick}>
                <th scope="row">{pet.ownerLastname}</th>
                <td>{pet.name}</td>
                <td>{pet.specie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PetSearcher