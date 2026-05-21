import React from 'react';
import UserCard from './components/UserCard';
const App = () => {
  const users=[
    {
      id:1,
      name:'Sohan Achhami',
      age:23,
      image:'https://i.pinimg.com/webp/1200x/f4/b1/46/f4b1462e52bcbb1fbeb332d7e3e03b39.webp'
    },
    {
      id:2,
      name:'Prabhat K.C.',
      age:22,
      image:'https://i.pinimg.com/1200x/60/53/31/605331331b838dd11f9599cd0a1d81df.jpg'
    },
    {
      id:3,
      name:'Bibek Bashyal',
      age:22,
      image:'https://i.pinimg.com/1200x/c4/e7/6b/c4e76b71df2045f97bd8e1dd701697f3.jpg'
    },
    {
      id:4,
      name:'Rupak Pandey',
      age:18
      ,image:'https://i.pinimg.com/736x/22/8f/77/228f77eb9b6c589dc666e7e820f299c3.jpg'
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 tracking-tight">
          User Cards
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         {
             users.map((user)=>{
              return (
                <li key={user.id}>
                   <UserCard name={user.name} age={user.age} image={user.image} />
                </li>
              )
             })
         }
        </ul>
      </div>
    </div>
  );
};

export default App;