import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const App = () => {
    const { expenses } = useContext(AppContext);
    const total = expenses.reduce((total, item) => {
		return (total = total + item.cost);
    }, 0);

    const alertTypetwo = total > 1000 ? 'alert-warning' : 'alert-success';

    return (
        <div className={`alert p-3 ${alertTypetwo}`}>
            <span>Total Spent: ${total}</span>
        </div>
    )
}

export default App;