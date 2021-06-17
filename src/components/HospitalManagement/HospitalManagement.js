
import hospitals from '../../json_data/hospital.json';
import HospitalList from './HospitalList.js';
import AddHospitalForm from './AddHospitalForm'
import {useState} from 'react';


function HospitalManagement(props){

	const [showAddHospitalForm,setShowAddHospitalForm]=useState(false);
	const [showAddNewHospital, setShowAddNewHospital] =useState(true)
    const [hospitalList, setHospitalList]=useState(hospitals);

	function onAddNewHospital(e){
       setShowAddHospitalForm(true);
       setShowAddNewHospital(false);
	}

	function hideHospitalForm(){
		setShowAddHospitalForm(false);
		setShowAddNewHospital(true);
	}

  function addHospital(hospital){
    const newHospital=[...hospitalList, hospital];
    setHospitalList(newHospital);
    setShowAddHospitalForm(false);
    setShowAddNewHospital(true);
  }
     
    function deleteHospital(hospital_id){
       //debugger;

        const deleteIndex=hospitalList.findIndex(
               function (hospital){
                console.log(hospital.hospital_id)
                 return hospital.hospital_id == hospital_id;
               }
            );
        console.log(hospitalList);

        hospitalList.splice(deleteIndex,1);
         setHospitalList([...hospitalList]);
    }
    return <div>{showAddNewHospital &&
    <button className="btn btn-info mt-2 mb-3 mr-2 float-right" onClick={onAddNewHospital}>Add New Hospital</button>
     }

     {
     	showAddHospitalForm &&
     	<AddHospitalForm hideHospitalForm={hideHospitalForm} addHospital={addHospital}></AddHospitalForm>
     }

    <HospitalList list={hospitalList} deleteHospital={deleteHospital}></HospitalList>
    </div>
}
export default HospitalManagement;