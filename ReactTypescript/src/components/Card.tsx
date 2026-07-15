interface Person{
    name:string 
    address:string 
    gender:string
}
const Card = ({name,address,gender}:Person) => {
  return (
    <div className="bg-gray-800 p-2 rounded-md">
       <p>Name: {name}</p>      
       <p>Address: {address}</p>
       <p>Gender: {gender} </p>      
    </div>
  )
}

export default Card
