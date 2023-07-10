import React from 'react'

const TopButton = () => {

  const handleTopClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <button title="Volver al tope" className="edit-btn fixed-bottom m-3" onClick={handleTopClick}>
      <i class="bi bi-arrow-up-circle"></i>
    </button>
  )
}

export default TopButton