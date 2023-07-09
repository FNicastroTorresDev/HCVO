import React from 'react'
import PetSearcher from '../../components/PetSearcher/PetSearcher'
import logo256 from '../../logo256.png'
import AddPetOwnerButtons from '../../components/AddPetOwnerButtons/AddPetOwnerButtons'
import AddOwnerModal from '../../components/AddOwnerModal/AddOwnerModal'
import AddPetModal from '../../components/AddPetModal/AddPetModal'

const Home = () => {
  return (
    <main className='d-flex my-2 flex-column align-items-center'>
      <div className='d-flex my-2 align-items-center'>
        <img src={logo256} alt='Logo Centro Veterinario Jujuy' className='img-logo-size' />
        <h2 className='mx-3 text-color'>Centro Veterinario Jujuy</h2>
      </div>

      <AddPetOwnerButtons />

      <PetSearcher />

      <AddOwnerModal />
      <AddPetModal />
    </main>
  )
}

export default Home