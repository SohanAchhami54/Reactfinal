import { QueryClient, useQuery } from '@tanstack/react-query'
import React from 'react'
import {useParams} from 'react-router-dom'
import { Axios } from '../api/axios'

const BlogDetail = () => {
    const {id}=useParams()
    const queryClient=new QueryClient()
    const {data,isLoading,isError}=useQuery({
        queryKey:['blog',id], 
        queryFn:async ()=>{
            const response=await Axios.get(`${id}`)
            return response.data
        },

        initialData:()=>{
            const cachedBlogs=queryClient.getQueryData(['blog'])
            const matchBlogs=cachedBlogs?.find(b=>b.id===Number(id)) 
            return matchBlogs
        }
    })
    
    console.log('the value of dynamic blog is:',data)
    
    return (
    <div className='flex flex-col gap-3 text-white max-w-sm md:max-w-md lg:max-w-4xl mx-auto '>
       BlogDetail
        <h1>The blog id is:{id} </h1>
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
    </div>
  )
}

export default BlogDetail
