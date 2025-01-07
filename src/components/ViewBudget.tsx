import React from 'react';

interface ViewBudgetProps {
	budget: number;
	handleEditClick: () => void;
}

const ViewBudget: React.FC<ViewBudgetProps> = ({ budget, handleEditClick }) => {
	return (
		<>
			<span>Budget: ${budget}</span>
			<button 
				type='button' 
				className='btn btn-primary' 
				onClick={handleEditClick}
			>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;