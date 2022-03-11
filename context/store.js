import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';


export const Store = createContext();

const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
};

/**
 * The reducer function takes the current state and an action as arguments. 
 * It returns the new state
 * @param state - The current state of the reducer.
 * @param action - The action that is being dispatched.
 * @returns The state object.
 */
function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return {
        ...state,
        darkMode: true,
      };
    case 'DARK_MODE_OFF':
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
}

/**
 * The StoreProvider component is a wrapper component that wraps around the children components. 
 * It provides the state and dispatch functions to the children components
 * @param props - The children of the component.
 * @returns The `Store.Provider` component is being returned.
 */
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
