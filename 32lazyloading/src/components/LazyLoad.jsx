import React from 'react'
import { Suspense } from 'react'
import PageLoader from './PageLoader'

const LazyLoad = ({children}) => {
  return (
   <Suspense fallback={<PageLoader/>}>
       {children}
   </Suspense>
  )
}
export default LazyLoad
