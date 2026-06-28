import { logRoles, render, screen } from "@testing-library/react";
import {toBeInTheDocument} from "@testing-library/jest-dom"
import { describe, expect, it, vi } from "vitest";
import SearchBar from "./SearchBar";

describe('SearchBar',()=>{
    it('render input and buttons',()=>{
      const {container} = render(<SearchBar onSearch={vi.fn()}/>) 
      logRoles(container)
        expect(screen.getByRole("textbox",{
            name:/search products/i
        })).toBeInTheDocument()

        expect(screen.getByRole("button",{
            name:/search/i
        })).toBeInTheDocument()  
    })
})
