import { describe, it, expect } from 'vitest';
import { cartReducer, initialState } from './CartContext';

describe('Cart Reducer', () => {

  it('can add item', () => {
    const result = cartReducer(initialState, {
      type: 'ADD_TO_CART',
      payload: { id: '2', name: 'Shoes', price: 90000 }
    });

    expect(result.items.length).toBe(2);
  });


  it('can delete one item', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_TO_CART',
      payload: { id: '2', name: 'Shoes', price: 90000 }
    });

    const result = cartReducer(state, {
      type: 'DELETE_FROM_CART',
      payload: { id: '2' }
    });

    expect(result.items.length).toBe(1);
  });


  it('can delete all items', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_TO_CART',
      payload: { id: '2', name: 'Shoes', price: 90000 }
    });


    state = cartReducer(state, { type: 'DELETE_FROM_CART', payload: { id: 1 } });
    state = cartReducer(state, { type: 'DELETE_FROM_CART', payload: { id: '2' } });

    expect(state.items.length).toBe(0);
  });

  
  it('shows total items count', () => {
    expect(initialState.items.length).toBe(1);

    const state = cartReducer(initialState, {
      type: 'ADD_TO_CART',
      payload: { id: '2', name: 'Shoes', price: 90000 }
    });

    expect(state.items.length).toBe(2);
  });
});