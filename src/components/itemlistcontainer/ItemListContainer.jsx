import React from 'react'
import '../itemlistcontainer/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <section className='section-item'>
        <h2 className='title-item'>{greeting}</h2>
      
    </section>
  )
}

export default ItemListContainer
