import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import type { BlogType } from "../types"

interface BlogPostProps{
    d:BlogType
}
const Blogpost = ({d}:BlogPostProps) => { 
    const navigate=useNavigate()
  return (
    <div>
             <li key={d.id} className="flex flex-col gap-3 rounded-md bg-gray-600 p-3 group">
                    {
                        d.cover_image? (
                          <div className="overflow-hidden">
                         <img src={d.cover_image} className="h-40 w-full object-cover group-hover:scale-105  transition-all duration-200 ease-linear delay-100
                         rounded-md" 
                             alt='image' />
                          </div>
                         ):(
                         <div className="flex justify-center items-center h-40 w-full bg-gray-800 rounded-md">
                            <p>No image found.</p>
                         </div>
                        )
                    }
                    <p className="text-sm ">Created At: {d.created_at.split('T')[0]} </p>
                    <p className="text-sm">Id: {d.id}</p>
                    <p className="line-clamp-3 text-xs">Description: {d.description} </p>

                   
                   <Button onClick={()=>navigate(`/dashboard/blog/${d.id}`)}
                    variant="contained">Click me</Button>
                </li>
    </div>
  )
}

export default Blogpost
