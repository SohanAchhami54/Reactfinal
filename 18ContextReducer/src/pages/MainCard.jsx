import React from 'react'
import CardComponent from '../components/CardComponent'
import CardList from '../components/CardList'

const MainCard = () => {
  return (
    <div className='flex flex-wrap gap-4'>
       <CardComponent/>
       <CardList/>
    </div>
  )
}

export default MainCard
