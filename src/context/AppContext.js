import React, { createContext, useReducer } from "react";

// reducer used to update the state, based on the action done by the user
const AppReducer = (state, action) => {
    switch(action.type){
        default: return state;
    }
};

// initial state when the app loads
const initialState = {
    budget: 1250,
    expenses: [
        { id: 22, name: 'rent', cost: 775},
        { id: 222, name: 'holiday', cost: 800}
    ],
};

// creating the context
export const AppContext = createContext();

// provider component -  wrapping the components we want to give access to the state
export const AppProvider = (props) => {
    // setting up the app state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // returns the context by passing in the values we want to expose
    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};