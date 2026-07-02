import { describe, expect } from "vitest";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";


describe('Header',()=>{
    it('matches snapshot',()=>{
      const {container} = render(
            <MemoryRouter>
               <Header/>
            </MemoryRouter> 
        )
        expect(container).toMatchSnapshot()
    }) 

  
})