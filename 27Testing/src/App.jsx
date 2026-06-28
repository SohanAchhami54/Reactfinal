// import SearchBar from "./components/SearchBar";
// const App = () => {
//   const handleSearch = (value) => {
//     console.log("Search Value:", value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-600">
//       <h1>Search App</h1>

//       <SearchBar onSearch={handleSearch} />
       
//     </div>
//   );
// };

// export default App;

import React from 'react'
import CartApp from './components/CartApp'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-700 text-white p-3'>
      <h1>This is App.</h1>
       <CartApp/>
    </div>
  )
}

export default App
