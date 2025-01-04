import React, { createContext, useReducer } from "react";

// AppReducer updates the state, based on the action done by the user
const AppReducer = (state, action) => {
    let newState;
    switch(action.type){
        case 'ADD_EXPENSE':
            newState = {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
            // Save entire state to localStorage
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        case 'DELETE_EXPENSE':
            newState = {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
            // Save updated state after deletion
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        case 'SET_BUDGET':
            newState = {
                ...state,
                budget: action.payload,
            };
            // Save updated state after budget change
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        default: 
            return state;
    }
};

// Initial default values if no stored data exists
const defaultState = {
    budget: 1250,
    expenses: [
        { id: 22, name: 'Rent', cost: 725},
        { id: 222, name: 'Phone', cost: 55}
    ],
};

// Get state from localStorage or use default
const getInitialState = () => {
    const savedState = localStorage.getItem("budgetState");
    return savedState ? JSON.parse(savedState) : defaultState;
};

// creating the context
export const AppContext = createContext();

// AppProvider wraps the components we want to give access to the state
export const AppProvider = (props) => {
    // setting up the app state with persisted data
    const [state, dispatch] = useReducer(AppReducer, getInitialState());

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget, 
                expenses: state.expenses, 
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};