import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

import Button from "@mui/material/Button"
import BlogSkeleton from "../components/BlogSkeleton"
import Blogpost from "../components/Blogpost"
import type { BlogType } from "../types"
import Stack from "@mui/material/Stack"
import Pagination from "@mui/material/Pagination"
import { Axios } from "../api/blogservice"


const Blog = () => {  
    const [searchParams, setSearchParams] = useSearchParams() 
    const page=Number(searchParams.get('page')||1)
  
   
    const handlePageChange=(_:React.ChangeEvent<unknown>,newPage:number)=>{
        setSearchParams({page:newPage.toString()})
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const {data,isLoading,isError,refetch}=useQuery({
        queryKey:['blog',page],
        queryFn:async()=>{
             const response=await Axios.get('/',{params:{page:page,per_page:10}}) 
             return response.data
        },
        staleTime:5*60*1000
    })
     
       if(isError){
        return <div className='min-h-screen flex flex-col justify-center items-center'>
              <h1 className='text-red-500'>Error has occur please try again later</h1>
                <Button onClick={()=>refetch()} 
                variant="contained">Try again</Button>
        </div>
    }

    const totalPages=30

  return (
    <div className="flex flex-col gap-2 pt-5">
        {/* this is for button  */}
       <div className="flex   justify-between items-center"> 

        <span className="text-xl font-semibold">Blog</span>
          
       </div>
    
    {/* this is the actual content   */}
     {isLoading?(
        
        // <p>Data is being loading...</p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
           {Array.from({length:10},(_,i)=><BlogSkeleton key={i}/>)}
        </div>
     ):(
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
           { 
             data?.map((d:BlogType)=>(
                <Blogpost key={d.id} d={d}/>
             ))
           }
        </ul>
     )}

     {/* MUI Pagination */}
            {!isLoading && data && (
                <div className="flex justify-center mt-8">
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                            shape="rounded"
                            color="primary"
                            size="large"
                            showFirstButton
                            showLastButton
                        />
                    </Stack>
                </div>
            )}
     
       {!isLoading && (!data || data.length === 0) && (
                <h1 className='text-center text-xl mt-10'>No blog posts found</h1>
      )} 
    </div>
  )
}

export default Blog
