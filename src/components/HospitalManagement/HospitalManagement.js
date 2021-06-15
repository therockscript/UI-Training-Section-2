
import hospitals from '../../json_data/hospital.json';
import HospitalList from './HospitalList.js';
import AddHospitalForm from './AddHospitalForm'
import {useState} from 'react';


function HospitalManagement(props){

	const [showAddHospitalForm,setShowAddHospitalForm]=useState(false);
	const [showAddNewHospital, setShowAddNewHospital] =useState(true)

	function onAddNewHospital(e){
       setShowAddHospitalForm(true);
       setShowAddNewHospital(false);
	}

	function hideHospitalForm(){
		setShowAddHospitalForm(false);
		setShowAddNewHospital(true);
	}

    return <div>{showAddNewHospital &&
    <button className="btn btn-info mt-2 mb-3 mr-2 float-right" onClick={onAddNewHospital}>Add New Hospital</button>
     }

     {
     	showAddHospitalForm &&
     	<AddHospitalForm hideHospitalForm={hideHospitalForm}></AddHospitalForm>
     }

    <HospitalList list={hospitals}></HospitalList>
    </div>
}
export default HospitalManagement;