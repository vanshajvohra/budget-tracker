import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ClearAllButton = () => {
    const { dispatch } = useContext(AppContext);

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to clear all expenses? This cannot be undone.')) {
            dispatch({
                type: 'CLEAR_ALL'
            });
        }
    };

    return (
        <button 
            className="btn btn-danger"
            onClick={handleClearAll}
        >
            Clear All Expenses
        </button>
    );
};

export default ClearAllButton; 