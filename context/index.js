import React, {useReducer} from 'react';
import {reducer, INITIAL_STATE} from './reducers';

export const GlobalContext = React.createContext();
export const GlobalContextDispatch = React.createContext();

const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // console.log(state);
  return (
    <GlobalContextDispatch.Provider value={dispatch}>
      <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
    </GlobalContextDispatch.Provider>
  );
};

export default GlobalContextProvider;
