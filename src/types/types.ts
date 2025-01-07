// Create a new file for shared types
export interface Expense {
  id: number;
  name: string;
  cost: number;
}

export interface AppState {
  budget: number;
  expenses: Expense[];
}

export type ActionType = 
  | { type: 'ADD_EXPENSE'; payload: Expense }
  | { type: 'DELETE_EXPENSE'; payload: number }
  | { type: 'SET_BUDGET'; payload: number }
  | { type: 'CLEAR_ALL' };