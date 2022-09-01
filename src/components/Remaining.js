import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const App = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=>{
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-secondary';

    return (
        <div className={`alert p-3 ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

export default App;