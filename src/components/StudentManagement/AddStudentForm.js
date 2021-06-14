import FormGroup from './FormGroup';

function AddStudentForm(props) {

    return <div className="m-5 border border-dark p-4">
        <FormGroup label="Roll Number" type="number" name="roll_number" value="" />
        <FormGroup label="Name" type="text" name="name" value="" />
        <FormGroup label="Date of birth" type="date" name="dob" value="" />
        <FormGroup label="Address" type="text" name="address" value="" />
        <button type="button" className="btn btn-primary mr-2">Add Student</button>
        <button type="button" className="btn btn-secondary" onClick={props.hideStudentForm}>Cancel</button>
    </div>
}

export default AddStudentForm;