import React from "react";

const AddExpenseForm = () => {
    return (
        <form>
			<div class='row'>
				<div class='col-sm'>
					<label for='name'>Name</label>
					<input required='required' type='text' class='form-control' id='name'></input>
				</div>
				<div class='col-sm'>
					<label for='cost'>Cost</label>
					<input required='required' type='number' class='form-control' id='cost'></input>
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