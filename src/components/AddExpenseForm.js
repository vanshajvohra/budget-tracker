import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid"; // uuidv4 generates a random ID for each new expense

const AddExpenseForm = () => {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		
		// creating a new expense object
		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

    return (
        <form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm'>
					<label for='name'>Name</label>
					<input required='required' type='text' class='form-control' id='name' value={name} onChange={(event) => setName(event.target.value)}></input>
				</div>
				<div class='col-sm'>
					<label for='cost'>Cost</label>
					<input required='required' type='number' class='form-control' id='cost' value={cost} onChange={(event) => setCost(event.target.value)}></input>
				</div>
                <div className="row mt-3">
                    <div class='col-sm'>
					    <button type='submit' class='btn btn-primary'>
						    Save
					    </button>
				    </div>
                </div>
			</div>
		</form>
    );
};

export default AddExpenseForm;