import React, { useContext, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AppContext } from "../context/AppContext";

interface ChartData {
    name: string;
    amount: number;
}

const WeeklyExpenseChart: React.FC = () => {
    const { expenses } = useContext(AppContext);
    const chartRef = useRef<HTMLDivElement>(null);

    const getExpensesByCategory = (): ChartData[] => {
        const categoryTotals = expenses.reduce<{ [key: string]: number }>((acc, expense) => {
            acc[expense.name] = (acc[expense.name] || 0) + expense.cost;
            return acc;
        }, {});

        return Object.entries(categoryTotals).map(([name, total]) => ({
            name,
            amount: total
        }));
    };

    const handleDownload = (): void => {
        const chartContainer = chartRef.current;
        if (!chartContainer) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const svgData = chartContainer.querySelector('svg');
        if (!svgData) return;

        const svgString = new XMLSerializer().serializeToString(svgData);
        const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

        const URL = window.URL || window.webkitURL || window;
        const blobURL = URL.createObjectURL(svg);

        const image = new Image();
        image.onload = () => {
            canvas.width = svgData.width.baseVal.value;
            canvas.height = svgData.height.baseVal.value;
            
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
            
            const downloadLink = document.createElement('a');
            downloadLink.download = 'expense-chart.png';
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.click();
            
            URL.revokeObjectURL(blobURL);
        };
        image.src = blobURL;
    };

    return (
        <div className="mt-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Expense Categories</h3>
                <button 
                    className="btn btn-primary btn-sm"
                    onClick={handleDownload}
                >
                    Download Chart
                </button>
            </div>
            <div style={{ height: '300px' }} ref={chartRef}>
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
                        <Tooltip formatter={(value: number) => `$${value}`} />
                        <Bar dataKey="amount" fill="#0d6efd" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyExpenseChart; 