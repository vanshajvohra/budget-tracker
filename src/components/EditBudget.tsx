import React, { useState, ChangeEvent } from 'react';

interface EditBudgetProps {
	budget: number;
	handleSaveClick: (value: number) => void;
}

const EditBudget: React.FC<EditBudgetProps> = ({ budget, handleSaveClick }) => {
	const [value, setValue] = useState<number>(budget);

	return (
		<>
			<input
				required
				type='number'
				className='form-control mr-3'
				id='name'
				value={value}
				onChange={(event: ChangeEvent<HTMLInputElement>) => 
					setValue(Number(event.target.value))}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;