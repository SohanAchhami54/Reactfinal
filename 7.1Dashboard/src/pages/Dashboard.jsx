import React from 'react'
import {useState} from 'react'
import { Header, Main, Sidebar } from '../components'

const Dashboard = () => {
    const [activePage,setActivePage]=useState('overview') 
    console.log('the value of active page is:',activePage)
  return (
    <div className='min-h-screen flex flex-col'>
       <Header activePage={activePage} setActivePage={setActivePage} /> 
        <div className='flex flex-1 relative'>
           <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <Main activePage={activePage} />
       </div>
    </div>
  )
}

export default Dashboard
