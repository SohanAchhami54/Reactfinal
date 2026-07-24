export interface User {
    email:string 
    password:string 
}

export type AuthUser=Omit<User,'password'>

export type LoginPayload={
    user:User 
    token:string
}

export interface AuthState{
    user:AuthUser | null 
    token:string |null
    isLoggedIn:boolean
}
