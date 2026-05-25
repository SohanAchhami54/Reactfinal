import React from 'react'

const Contact = ({data,setData}) => { 
    const handleClick=(id)=>{
        setData(data.filter(d=>d.id!==id))
    }
  return (
    <div style={{marginTop:'10px',border:'1px solid white',paddingTop:'1rem',paddingBottom:'1rem',paddingLeft:'5rem',paddingRight:'5rem',borderRadius:'5px',border:'1px solid gray'}}>
      <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px'}}>
       {
        data.map((user,index)=>(
            <li key={index} style={{display:'flex',flexWrap:'wrap' ,gap:'30px'}}> 
                <h1>{user.name}</h1>
                <p>{user.phone} </p>
                <button onClick={()=> handleClick(user.id)}
                 style={{backgroundColor:'rgb(180,70,50)',color:'white',paddingLeft:'5px',paddingRight:'5px'}}    
                >
                    Delete
                </button>
            </li>
        ))
       } 
     </ul>    
    </div>
  )
}

export default Contact
