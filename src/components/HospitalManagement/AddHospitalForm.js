import FormGroup from './FormGroup';
import {useState} from 'react';

const initialFormValues={
   hospital_id: null,
   hospital_name: "",
   hospital_place:"",
   no_of_beds: null
};

function AddHospitalForm(props){
	const[formValue, setFormValue]= useState(initialFormValues);

	function onFormUpdate(event){
		console.log(event)
		const tempFormValue = {
        [event.target.name]: event.target.value
    }
    console.log(formValue)

    setFormValue({
    	...formValue,
    	...tempFormValue
    })

	}

	function onAddHospital(){
		props.addHospital(formValue);
	}

	return <div className="m-5 border solid 2px border-info p-3">
              <FormGroup label="Hospital Id"
               type="number" name="hospital_id"
               value={formValue.hospital_id}
               onInputChange={onFormUpdate}/>

              <FormGroup label="Hospital Name"
               type="text" name="hospital_name"
               value={formValue.hospital_name}
               onInputChange={onFormUpdate}/>

              <FormGroup label="Hospital Place" 
              type="text" name="hospital_place"
               value={formValue.hospital_place}
               onInputChange={onFormUpdate}/>

              <FormGroup label="Number of Beds"
               type="number" name="no_of_beds"
               value={formValue.no_of_beds}
               onInputChange={onFormUpdate}/>

              <button type="button" className="btn btn-primary mr-1"
               onClick={onAddHospital}>Add Hospital</button>

              <button type="button" className="btn btn-danger"
               onClick={props.hideHospitalForm}>Cancel</button>
	       </div>
}
export default AddHospitalForm;