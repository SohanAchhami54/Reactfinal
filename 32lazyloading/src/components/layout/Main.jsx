import React from 'react'
import Header from './Header'
import {Outlet,ScrollRestoration} from 'react-router-dom'
import { Suspense } from 'react'
import PageLoader from '../PageLoader'

const Main = () => {
  return (
    <div className='text-white bg-gray-600'>
      <Header/> 
        <main className='min-h-screen'>
            <Suspense fallback={<PageLoader/>}>
                <Outlet/>
            </Suspense>
        </main>
          <ScrollRestoration />
    </div>
  )
}
export default Main