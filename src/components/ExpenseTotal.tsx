import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal: React.FC = () => {
    const { expenses, budget } = useContext(AppContext);
    const total = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    let alertTypetwo = 'alert-success';
    if (total > (0.9 * budget) && total < budget) {
        alertTypetwo = 'alert-warning'
    } else if (total > budget) {
        alertTypetwo = 'alert-danger'
    }

    return (
        <div className={`alert p-4 ${alertTypetwo}`}>
            <span>Total Spent: ${total}</span>
        </div>
    )
}

export default ExpenseTotal;