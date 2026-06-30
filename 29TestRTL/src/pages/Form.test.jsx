    import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
    import Form from "./Form";
    import { render, screen } from "@testing-library/react";
    import "@testing-library/jest-dom/vitest"
    import userEvent from "@testing-library/user-event";

    describe('Login form',()=>{
       
        let logSpy 
        
        //reset spy before each test
        beforeEach(()=>{
            logSpy=vi.spyOn(console,'log')
        })


        it('render email password and login button',()=>{
            render(<Form/>)
            expect(screen.getByRole('textbox',{name:/enter your email/i})).toBeInTheDocument()
            expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
            expect(screen.getByRole('button',{name:/loginbutton/i})).toBeInTheDocument()
        })

    

        it('lets user type value of email  and password',async()=>{
             const user=userEvent.setup() 
             render(<Form/>)

             const email=screen.getByRole('textbox',{name:/enter your email/i})
             const password=screen.getByLabelText(/password/i)
             await user.type(email,'sohan@gmail.com')
             await user.type(password,'dfdfdf122')

             expect(email).toHaveValue('sohan@gmail.com') 
             expect(password).toHaveValue('dfdfdf122') 

        })



        it('does not submit if email and password is missing',async()=>{
            const user=userEvent.setup() 
            render(<Form/>) 
            //both missing
            await user.click(screen.getByRole('button',{name:/loginbutton/i}))
            expect(logSpy).not.toHaveBeenCalled()
        })



        it('does not submit if email is empty',async()=>{
            const user=userEvent.setup() 
            render(<Form/>) 
            
            await user.type(screen.getByRole('textbox',{name:/enter your email/i}),'sohan@gmail.com')
            await user.click(screen.getByRole('button',{name:/loginbutton/i}))
            expect(logSpy).not.toHaveBeenCalled()
        })


          it('does not submit if password is empty',async()=>{
            const user=userEvent.setup() 
            render(<Form/>) 
            
            await user.type(screen.getByLabelText(/password/i),'3dfdf2323')
            await user.click(screen.getByRole('button',{name:/loginbutton/i}))
            expect(logSpy).not.toHaveBeenCalled()
        })


         it('submit the value',async()=>{
            const user=userEvent.setup() 
             
            render(<Form/>) 
            await user.type(screen.getByRole('textbox', { name: /email/i }),'sohan@example.com')
            await user.type(screen.getByLabelText(/password/i), '9877554557')
            await user.click(screen.getByRole('button', { name: /loginbutton/i }))
            expect(logSpy).toHaveBeenCalledTimes(2)
            expect(logSpy).toHaveBeenCalledWith("Email:", "sohan@example.com");
            expect(logSpy).toHaveBeenCalledWith("Password:", "9877554557");
        })
    })