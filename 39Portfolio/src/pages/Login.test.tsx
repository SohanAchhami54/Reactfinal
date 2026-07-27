    import { beforeEach, describe, expect, it, vi } from "vitest";
    import Login from "./Login";
    import { render, screen, waitFor } from "@testing-library/react";
    import "@testing-library/jest-dom/vitest"
    import userEvent from "@testing-library/user-event";
    import { configureStore } from "@reduxjs/toolkit";
    import { authReducer } from "../features/auth/authslice";
    import { Provider } from "react-redux";
    import { MemoryRouter } from "react-router-dom";


    const mockNavigate=vi.fn() 
    vi.mock('react-router-dom',async(importOriginal)=>{
        const actual =await importOriginal<typeof import('react-router-dom')>()  
        return {
            ...actual, 
            useNavigate:()=>mockNavigate,
        }
    })

    vi.mock('nanoid',()=>({
        nanoid:()=>'mock-token-123'
    }))

    function renderLogin(){ 
        const store=configureStore({
            reducer:{auth:authReducer}
        })  

        render(
            <Provider store={store}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
            </Provider>
        )
        return {store}
    }


    describe('Login Form',()=>{ 
        beforeEach(()=>{
            mockNavigate.mockClear()
        })

    it('render email and password',()=>{
        renderLogin()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole('button',{name:/login/i})).toBeInTheDocument()       
    })


    it('allow typing value of email and password',async ()=>{ 
        renderLogin() 
        const user=userEvent.setup()  
        
        const emailInput=screen.getByLabelText(/email/i);
        await user.type(emailInput,'sohanachmm@gmail.com') 
        expect(emailInput).toHaveValue('sohanachmm@gmail.com') 

        const passwordInput=screen.getByLabelText(/password/i);
        await user.type(passwordInput,'mypassword123') 
        expect(passwordInput).toHaveValue('mypassword123')     
    })



    it('show validation errors on empty field',async()=>{
        renderLogin() 
        const user=userEvent.setup() 
        
        // const button=screen.getByRole('button',{name:/login/i}) 
        await user.click(screen.getByRole('button',{name:/login/i})) 

        expect(await screen.findByText(/email is required/i)).toBeInTheDocument() 
        expect(await screen.findByText(/password is required/i)).toBeInTheDocument() 
    })


    it('show error for invalid email',async()=>{
        renderLogin() 
        const user=userEvent.setup() 
        
        await user.type(screen.getByLabelText(/email/i), "not-an-email");
        await user.type(screen.getByLabelText(/password/i), "123456789");
        await user.click(screen.getByRole("button", { name: /login/i }));

        expect(await screen.findByText(/please enter a valid email/i)).toBeInTheDocument() 
    })



    it('show error for short password',async()=>{
        renderLogin() 
        const user=userEvent.setup() 

        await user.type(screen.getByLabelText(/email/i), "sohanachmm@gmail.com");
        await user.type(screen.getByLabelText(/password/i), "123");
        await user.click(screen.getByRole("button", { name: /login/i }));
        
        expect(await screen.findByText(/password must be at least 6 characters/i)).toBeInTheDocument()
    })



    it('show loading state when submitting',async()=>{
        renderLogin() 
        const user=userEvent.setup() 

        await user.type(screen.getByLabelText(/email/i), "sohanachmm@gmail.com");
        await user.type(screen.getByLabelText(/password/i), "mypassword123");
        await user.click(screen.getByRole("button", { name: /login/i }));

        const button = screen.getByRole("button", { name: /login/i });
        expect(button).toHaveTextContent(/logining/i)
    })
    
    it('logs in and navigates home on valid submit',async()=>{
        const {store}=renderLogin() 
        const user=userEvent.setup() 

        await user.type(screen.getByLabelText(/email/i), "sohanachmm@gmail.com");
        await user.type(screen.getByLabelText(/password/i), "mypassword123");
        await user.click(screen.getByRole('button',{name:/login/i}))

        await waitFor(
            ()=>{
                expect(store.getState().auth.isLoggedIn).toBe(true)
            },
            {timeout:2000}
        )

        expect(store.getState().auth.user).toEqual({email:'sohanachmm@gmail.com'}) 
        expect(store.getState().auth.token).toBe('mock-token-123') 
        expect(mockNavigate).toHaveBeenCalledWith('/')
    })
    })

