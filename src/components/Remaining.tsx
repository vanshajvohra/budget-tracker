import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining: React.FC = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    let alertType = 'alert-secondary';
    if (totalExpenses > (0.75 * budget) && totalExpenses < (0.9 * budget)) {
        alertType = 'alert-warning'
    } else if (totalExpenses > (0.9 * budget)) {
        alertType = 'alert-danger'
    }

    return (
        <div className={`alert p-4 ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;