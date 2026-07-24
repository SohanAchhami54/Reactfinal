import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import Button from "@mui/material/Button"
import type { BlogType } from "../types"
import { Axios } from "../api/blogservice"

const BlogDetail = () => { 
    const {id}=useParams()  
    const queryclient=useQueryClient()
    const {data,isLoading,isError,refetch}=useQuery({
        queryKey:['blog',id],
        queryFn:async ()=>{
          const response=await Axios.get(`${id}`) 
          return response.data 
        },
        initialData:()=>{
            const cachedBlogs=queryclient.getQueryData<BlogType[]>(['blog']) 
            const matchBlog=cachedBlogs?.find(b=>b.id===Number(id))
            return matchBlog
        }
    })

    if(isError){
        return <div className='min-h-screen flex flex-col justify-center items-center'>
              <h1 className='text-red-500'>Error has occur please try again later</h1>
                <Button onClick={()=>refetch()} 
                variant="contained">Try again</Button>
        </div>
    }


   return (
    <div className="flex flex-col gap-3 text-white max-w-sm md:max-w-md lg:max-w-4xl mx-auto">
       <h1>BlogDetail</h1>      
         {
                data?.cover_image ? 
                <img src={data?.cover_image} alt="coverimage" />
                :
                <div className='h-50 bg-gray-800'>
                    <h1>Cover image do not found</h1>
                </div>
            }
            <p>Published At: {data?.published_at.split('T')[0]} </p>
            <p>Slug: {data?.slug}</p>
            <p>Description: {data?.description} </p>
            <p>Positive Reaction count: {data?.positive_reactions_count} </p>
            <p>Public Reaction count: {data?.public_reactions_count} </p>
                {!isLoading && (!data || data.length === 0) && (
                <h1 className='text-center text-xl mt-10'>No blog posts found</h1>
      )} 
    </div>
    
  )
}

export default BlogDetail
