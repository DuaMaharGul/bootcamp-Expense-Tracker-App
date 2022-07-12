import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'; 

// initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Phone', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Eating Out', amount: -10 },
        { id: 4, text: 'Traveling', amount: 150 }
     ]
}

// global context
export const GlobalContext = createContext(initialState);

//global provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //actions that make call to reducer
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);
}