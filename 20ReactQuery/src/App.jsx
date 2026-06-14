import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Weather from './components/Weather'

const App = () => {
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <Weather queryClient={queryClient} />
    </QueryClientProvider>
  )
}

export default App
