import { afterEach, describe, expect, it, vi } from "vitest"
import { screen,render } from "@testing-library/react"
import { Axios } from "../api/axios"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@testing-library/jest-dom/vitest"
import Blogpost from "./Blogpost"
import { mockPosts } from "../test/mockPosts"
import Blog from "../pages/Blog"

vi.mock('../api/axios',()=>({
    Axios:{
        get:vi.fn() //factory functions.
    }
}))

afterEach(()=>{
  vi.restoreAllMocks()
})

function renderWithClient(ui){
    const queryclient=new QueryClient({
        defaultOptions:{
            queries:{
                retry:false
            }
        }}) 
    return render( //to use useQuery of Blogpost.
        <QueryClientProvider client={queryclient}>
              {ui}
        </QueryClientProvider>
    ) 
}
 
 describe('Blogpost',()=>{
    it('renders the list of blog post from mocked data',async()=>{
        Axios.get.mockResolvedValueOnce({data:mockPosts}) 
        renderWithClient(<Blogpost/>) 
        //testing async ui.
        // expect(await screen.findByText(/loading/i)).toBeInTheDocument() 
        expect(await screen.findByText(/sunt aut facere repellat/i)).toBeInTheDocument()
        expect(screen.getByText(/qui est esse/i)).toBeInTheDocument()
        expect(screen.getByText(/nesciunt quas odio/i)).toBeInTheDocument()
    })

    it('shows error mesage when api calls failed',async()=>{
         Axios.get.mockRejectedValueOnce(new Error('Network Error'))
        renderWithClient(<Blogpost/>) 

        expect(await screen.findByText(/Error/i)).toBeInTheDocument()
    }) 
 })
 

