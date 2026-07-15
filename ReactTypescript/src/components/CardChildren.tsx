import type {PropsWithChildren} from 'react'

// interface CardChildrenProps{
//     title:string 
//     task:string 
//     children:ReactNode
// }

interface CardChildrenProps extends PropsWithChildren {
     title:string 
     task:string 
}

const CardChildren = ({title,task,children}:CardChildrenProps) => {
  return (
    <div>
      <h1>{title}</h1>
       <span>{task}</span> 
         <div>
            {children}
         </div>

    </div>
  )
}

export default CardChildren
