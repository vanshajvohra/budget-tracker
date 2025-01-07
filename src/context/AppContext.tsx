import React, { createContext, useReducer, ReactNode } from "react";
import { AppState, ActionType } from "../types/types";

interface Expense {
    id: string;
    name: string;
    cost: number;
}

const AppReducer = (state: AppState, action: ActionType): AppState => {
    let newState: AppState;
    switch(action.type){
        case 'ADD_EXPENSE':
            newState = {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        case 'DELETE_EXPENSE':
            newState = {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        case 'SET_BUDGET':
            newState = {
                ...state,
                budget: action.payload,
            };
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        case 'CLEAR_ALL':
            newState = {
                ...state,
                expenses: [],
                budget: defaultState.budget
            };
            localStorage.setItem("budgetState", JSON.stringify(newState));
            return newState;

        default: 
            return state;
    }
};

const defaultState: AppState = {
    budget: 1250,
    expenses: [
        { id: 22, name: 'Rent', cost: 725},
        { id: 222, name: 'Phone', cost: 55}
    ],
};

const getInitialState = (): AppState => {
    const savedState = localStorage.getItem("budgetState");
    return savedState ? JSON.parse(savedState) : defaultState;
};

interface AppContextType extends AppState {
    dispatch: React.Dispatch<ActionType>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, getInitialState());

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget, 
                expenses: state.expenses, 
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};