import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { describe, expect, it } from "vitest";
import { CartProvider } from "../context/CartContext";
import CartApp from "./CartApp";

describe('Cartapp',()=>{
    it('shows total items count:',()=>{
         render(<CartProvider> <CartApp/> </CartProvider>) 
        expect(screen.getByText(/Totalcart/i)).toBeInTheDocument()
    })

    it('has clickable delete button',()=>{
       render(<CartProvider><CartApp /></CartProvider>) 
       const deleteButton=screen.getByRole('button',{name:/deletebutton/i})
       expect(deleteButton).toBeInTheDocument() 
       fireEvent.click(deleteButton)
    })

    it('has clickable add item button',()=>{
         render(<CartProvider><CartApp /></CartProvider>) 
         const addButton=screen.getByRole('button',{name:/addbutton/i}) 
         expect(addButton).toBeInTheDocument() 
         fireEvent.click(addButton)
    })
})