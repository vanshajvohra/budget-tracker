import React, { createContext, useReducer } from "react";

// AppReducer updates the state, based on the action done by the user
const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            const newExpense = {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
            localStorage.setItem("expense", JSON.stringify(newExpense))
            return newExpense;
        case 'DELETE_EXPENSE':
            localStorage.removeItem(newExpense)
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default: return state;
    }
};

// initialState are the initial values that show up when the app loads
const initialState = {
    budget: 1250,
    expenses: [
        { id: 22, name: 'Rent', cost: 725},
        { id: 222, name: 'Phone', cost: 55}
    ],
};

// creating the context
export const AppContext = createContext();

const getInitialState = () => {
    const expense = localStorage.getItem("expense");
    return expense ? JSON.parse(expense) : initialState;
  };

// AppProvider wraps the components we want to give access to the state
export const AppProvider = (props) => {
    // setting up the app state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // returns the context by passing in the values we want to expose
    return(
    <AppContext.Provider value={{budget: state.budget, expenses: state.expenses, dispatch,}}>
        {props.children}
    </AppContext.Provider>)
};