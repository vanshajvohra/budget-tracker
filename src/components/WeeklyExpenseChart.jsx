import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AppContext } from "../context/AppContext";

const WeeklyExpenseChart = () => {
  const { expenses } = useContext(AppContext);

  // Group expenses by name and calculate totals
  const getExpensesByCategory = () => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      // If this category exists, add to its total, otherwise create new category
      acc[expense.name] = (acc[expense.name] || 0) + expense.cost;
      return acc;
    }, {});

    // Convert to array format for Recharts
    return Object.entries(categoryTotals).map(([name, total]) => ({
      name: name,
      amount: total
    }));
  };

  return (
    <div className="mt-4 mb-4">
      <h3 className="mb-3">Expense Categories</h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getExpensesByCategory()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="amount" fill="#0d6efd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyExpenseChart; 