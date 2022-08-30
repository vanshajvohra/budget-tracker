import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        { id: 1, name: "Rent", cost: 715 },
        { id: 2, name: "Hydro", cost: 25 },
        { id: 3, name: "Groceries", cost: 100 },
        { id: 4, name: "Phone", cost: 56 },
        { id: 5, name: "Eating Out", cost: 150 },
        {id: 6, name: "Haircut", cost: 30}
    ];

    return (
        <ul className="list-group">
            {expenses.map(((expense)=>(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            )

            )

            )}
        </ul>
    );
};

export default ExpenseList;