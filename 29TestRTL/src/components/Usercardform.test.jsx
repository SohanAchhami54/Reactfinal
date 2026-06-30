import {beforeEach, describe, expect, it, vi} from 'vitest'
import {logRoles, render, screen} from '@testing-library/react'
import { useCard } from '../context/CardContext'
import userEvent from '@testing-library/user-event'
import Usercardform from './Usercardform'
import "@testing-library/jest-dom/vitest"

vi.mock('../context/CardContext',()=>({
    useCard:vi.fn() //fake useCard
}))

describe('Usercardform',()=>{
    let setCardMock 
    beforeEach(()=>{
        setCardMock=vi.fn(), 
        useCard.mockReturnValue({card:[],setCard:setCardMock})
    })
    
   it('render input and button',()=>{
     render(<Usercardform/>) 
    
     expect(screen.getByRole('textbox',{name:/enter the name/i})).toBeInTheDocument()
     expect(screen.getByRole('spinbutton',{name:/enter the phone/i})).toBeInTheDocument() 
     expect(screen.getByRole('textbox',{name:/enter the location/i})).toBeInTheDocument()
     expect(screen.getByRole('button',{name:/addcard/i})).toBeInTheDocument()
   })

    it('let user type into input field',async ()=>{
       const user=userEvent.setup()
       render(<Usercardform/>)

       const nameInput=screen.getByRole('textbox',{name:/enter the name/i})
       await user.type(nameInput,'Sohan')
       expect(nameInput).toHaveValue('Sohan')
    })

    it('does not submit when name and phone is missing',async()=>{
        const user=userEvent.setup() 
        render(<Usercardform/>) 

        await user.click(screen.getByRole('button',{name:/addcard/i}))
        expect(setCardMock).not.toHaveBeenCalled()
    })

    it('submit the form when all data are filled',async()=>{
        const user=userEvent.setup() 
        render(<Usercardform/>) 

        await user.type(screen.getByRole('textbox',{name:/enter the name/i}),'Sohan')
        await user.type(screen.getByRole('spinbutton',{name:/enter the phone/i}),'9877554557')
        await user.type(screen.getByRole('textbox',{name:/enter the location/i}),'Basbari')
        await user.click(screen.getByRole('button',{name:/addcard/i}))
        expect(setCardMock).toHaveBeenCalledTimes(1)
    })
})

