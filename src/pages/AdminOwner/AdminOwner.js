import React from 'react'
import TopButton from '../../components/TopButton/TopButton'
import AddOwnerModal from '../../components/AddOwnerModal/AddOwnerModal'
import OwnerTable from '../../components/OwnerTable/OwnerTable'

const AdminOwner = () => {
  return (
    <main className='my-3 vh-100 d-flex align-items-start justify-content-center'>

      <OwnerTable />

      <AddOwnerModal />

      <TopButton />
    </main>
  )
}

export default AdminOwner