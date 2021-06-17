import { useState } from "react";
import FormGroup from "./FormGroup";

const initialFormValues = {
  rollNumber: null,
  name: "",
  dob: null,
  address: "",
};

function AddStudentForm(props) {

  const { student } = props;

  const [isAdd, setIsAdd] = useState(student ? false : true);
  const [formValue, setFormValue] = useState(student || initialFormValues);

  console.log("isAdd ==> ", isAdd);

  function onFormUpdate(event) {
    const tempFormValue = {
        [event.target.name]: event.target.value
    }
    setFormValue({
        ...formValue,
        ...tempFormValue
    })
  }

  function onAddOrUpdateStudent() {
    if (isAdd) {
      props.addStudent(formValue);
    } else {
      props.saveUpdatedStudent(formValue);
    }
  }

  return (
    <div className="m-5 border border-dark p-4">
      <h4 className="text-center">{isAdd ? "Add form" : "Update form"}</h4>
      <FormGroup
        label="Roll Number"
        type="number"
        name="rollNumber"
        value={formValue.rollNumber}
        disabled={isAdd ? false : true}
        onInputChange={onFormUpdate}
      />
      <FormGroup label="Name" 
        type="text" 
        name="name" 
        value={formValue.name} 
        onInputChange={onFormUpdate}
      />
      <FormGroup
        label="Date of birth"
        type="date"
        name="dob"
        value={formValue.dob}
        onInputChange={onFormUpdate}
      />
      <FormGroup
        label="Address"
        type="text"
        name="address"
        value={formValue.address}
        onInputChange={onFormUpdate}
      />
      <button 
        type="button" 
        className="btn btn-primary mr-2"
        onClick={onAddOrUpdateStudent}
        >
        {isAdd ? "Add Student": "Update Student"}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.hideStudentForm}
        onInputChange={onFormUpdate}
      >
        Cancel
      </button>
    </div>
  );
}

export default AddStudentForm;
