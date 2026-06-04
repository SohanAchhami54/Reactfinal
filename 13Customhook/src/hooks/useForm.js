import { useState } from "react"

function useForm(initialValue){ 
    const [values,setValues]=useState(initialValue)
     
    function handleChange(e){
         const {id,value}=e.target 
         setValues({...values,[id]:value})
    }

    function reset(){
        setValues(initialValue)
    }
    return {values,handleChange,reset}
}

export {useForm}