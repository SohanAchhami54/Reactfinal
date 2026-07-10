import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Login from "./Login";
import "@testing-library/jest-dom/vitest"
import { MemoryRouter } from "react-router-dom";
import configureMockStore from 'redux-mock-store'
import { Provider } from "react-redux";

const mockStore=configureMockStore()

describe('Login test',()=>{
    it('render text,input and button',()=>{
        const store=mockStore({
            auth:{user:null,token:null,isLoggedIn:false}
        })

        render(
        <Provider store={store}>
            <MemoryRouter>
              <Login/>
            </MemoryRouter>
        </Provider>
    )
        expect(screen.getByRole('heading',{name:/welcome back/i})).toBeInTheDocument()
        expect(screen.getByRole('textbox',{name:/enter your email/i})).toBeInTheDocument() 
         expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
        expect(screen.getByRole('button',{name:/login button/i})).toBeInTheDocument() 
    })
})
