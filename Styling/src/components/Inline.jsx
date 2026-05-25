import React from 'react'

const Inline = () => {
    const laptops = [
  {
    id: 1,
    brand: "Dell",
    model: "XPS 13",
    price: 1200,
    ram: "16GB",
    storage: "512GB SSD"
  },
  {
    id: 2,
    brand: "Apple",
    model: "MacBook Air M2",
    price: 1100,
    ram: "8GB",
    storage: "256GB SSD"
  },
  {
    id: 3,
    brand: "HP",
    model: "Pavilion 15",
    price: 800,
    ram: "8GB",
    storage: "512GB SSD"
  },
  {
    id: 4,
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    price: 1500,
    ram: "16GB",
    storage: "1TB SSD"
  }
];
  return (
    <div style={{marginTop:'20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h1 style={{textAlign:'center'}}>This is Inline Css.</h1>
        <ul style={{display:'flex', flexDirection:'row',flexWrap:'wrap',gap:'30px'}}>
            {
                laptops.map((lap)=>(
                    <li key={lap.id} style={{border:'1px solid gray',padding:'10px',borderColor:'red',borderRadius:'10px'}}>
                        <h1 style={{fontWeight:'medium', color:'blue',}}>Brand:{lap.brand}</h1> 
                        <h2>Model:{lap.model}</h2> 
                         <div>
                            <span style={{color:'blueviolet'}}>Price:{lap.price}</span> 
                            <span>Ram:{lap.ram}</span> 
                            <span>Storage:{lap.storage} </span>
                         </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Inline
