import { describe, it, expect } from 'vitest'
import { authReducer, login, logout } from './authslice.ts'
import type { AuthState, LoginPayload } from './authType'

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
}

describe('authSlice', () => {
  it('returns initial state', () => {
    expect(authReducer(undefined,{type:'unknown'})).toEqual(initialState)
  })

  it('handles login and strips password', () => {
    const payload: LoginPayload = { //fake data, like what your API would return (user + password + token)
      user: { email: 'sujan@test.com', password: 'secret123' },
      token: 'fake-jwt-token',
    }
  //payload = fake data, like what our API would return (user + password + token)
  //login(payload) = creates the action object
  //authReducer(initialState, login(payload)) = "starting from empty state, run login
    const state = authReducer(initialState, login(payload)) 
    expect(state).toEqual({
      user: { email: 'sujan@test.com' },
      token: 'fake-jwt-token',
      isLoggedIn: true,
    })
    expect(state.user).not.toHaveProperty('password')
  })

  it('handles logout', () => {
    const loggedInState: AuthState = {
      user: { email: 'sujan@test.com' },
      token: 'fake-jwt-token',
      isLoggedIn: true,
    }

    expect(authReducer(loggedInState, logout())).toEqual(initialState)
  })
})