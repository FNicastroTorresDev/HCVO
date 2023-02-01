import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <main className='position-relative'>
      <Navbar />

      <LoginForm />

      <Footer />
    </main>
  )
}

export default LoginPage