import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PetSearcher from '../../components/PetSearcher/PetSearcher'

const Home = () => {
  return (
    <main className='position-relative'>
      <NavBar />

      <PetSearcher />

      <Footer />
    </main>
  )
}

export default Home