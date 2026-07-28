import { Suspense, type ReactNode } from "react"
import PageLoader from "./PageLoader"

interface childrenProps{
    children:ReactNode
}

const LazyLoad = ({children}:childrenProps) => {
  return (
     <Suspense fallback={<PageLoader/>}>
         {children}
     </Suspense>
  )
}

export default LazyLoad

