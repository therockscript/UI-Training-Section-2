import FormGroup from './FormGroup';

function AddHospitalForm(props){
	return <div className="m-5 border solid 2px border-info p-3">
              <FormGroup label="Hospital Id" type="number" name="hospital_id" value=""/>
              <FormGroup label="Hospital Name" type="text" name="hospital_name" value=""/>
              <FormGroup label="Hospital Place" type="text" name="hospital-place" value=""/>
              <FormGroup label="Number of Beds" type="number" name="no_of-beds" value=""/>
              <button type="button" className="btn btn-primary mr-1">Add Hospital</button>
              <button type="button" className="btn btn-danger" onClick={props.hideHospitalForm}>Cancel</button>
	       </div>
}
export default AddHospitalForm;