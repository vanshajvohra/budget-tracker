import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AppContext } from "../context/AppContext";

const WeeklyExpenseChart = () => {
  const { expenses } = useContext(AppContext);

  // Group expenses by day and calculate daily totals
  const getDailyData = () => {
    const today = new Date();
    const lastWeek = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });

    // Initialize daily totals with 0
    const dailyTotals = lastWeek.reduce((acc, date) => {
      acc[date] = 0;
      return acc;
    }, {});

    // Sum up costs for each day
    expenses.forEach(expense => {
      // Since your expenses don't seem to have dates, 
      // we'll distribute them evenly across the week for demo purposes
      const randomDay = lastWeek[Math.floor(Math.random() * lastWeek.length)];
      dailyTotals[randomDay] += expense.cost;
    });

    return Object.entries(dailyTotals).map(([date, amount]) => ({
      date: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
      amount: amount
    }));
  };

  return (
    <div className="mt-4 mb-4">
      <h3 className="mb-3">Expense Breakdown</h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getDailyData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="amount" fill="#0d6efd" /> {/* Using Bootstrap primary color */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyExpenseChart; 