import { describe, expect, it } from "vitest";
import Counter from "../pages/Counterpage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event";

vi.mock

describe('Counter Increment',()=>{
   it('counter text',()=>{
      render(<Counter/>)
      expect(screen.getByText(/counter/i)).toBeInTheDocument()
   })

   it('render button',()=>{
     render(<Counter/>) 
     expect(screen.getByRole('button',{name:/incrementbutton/i})).toBeInTheDocument()
   })

   it('checking button work or not',async ()=>{
    const user=userEvent.setup()
    render(<Counter/>)
    
    const button=screen.getByRole('button',{name:/incrementbutton/i})
    await user.click(button)
    expect(button).toHaveTextContent('Click 1')
   })
})