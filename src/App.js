import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import WeeklyExpenseChart from './components/WeeklyExpenseChart';
import ClearAllButton from './components/ClearAllButton';

const App = () => {
    return (
        <AppProvider>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <h1>Expend</h1>
                <ClearAllButton />
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
            </div>
            <div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
            </div>
            <h3 className='mt-3'>Add Expenses</h3>
            <div className='mt-3'>
                <div className='col-sm'>
                    <AddExpenseForm />
                </div>
            </div>
            <WeeklyExpenseChart />
        </div>
        </AppProvider>
    )
}

export default App;