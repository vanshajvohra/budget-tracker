import React, { useContext, useState, FormEvent, ChangeEvent } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { Expense } from "../types/types";

const AddExpenseForm: React.FC = () => {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState<string>('');
	const [cost, setCost] = useState<string>('');

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const expense: Expense = {
			id: parseInt(uuidv4().replace(/-/g, ''), 16) || 0,
			name: name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		// Reset form
		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='name'>Name</label>
					<input 
						required
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event: ChangeEvent<HTMLInputElement>) => 
							setName(event.target.value)}
					/>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input 
						required
						type='number'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event: ChangeEvent<HTMLInputElement>) => 
							setCost(event.target.value)}
					/>
				</div>
				<div className="row mt-3">
					<div className='col-sm'>
						<button type='submit' className='btn btn-primary'>
							Save
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;