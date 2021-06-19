
import hospitals from '../../json_data/hospital.json';
import HospitalList from './HospitalList.js';
import AddHospitalForm from './AddHospitalForm'
import {useState} from 'react';


function HospitalManagement(props){

	const [showAddHospitalForm,setShowAddHospitalForm]=useState(false);
	const [showAddNewHospital, setShowAddNewHospital] =useState(true)
  const [hospitalList, setHospitalList]=useState(hospitals);
  const[selectedHospital, setSelectedHospital]=useState(null)

	function onAddNewHospital(e){
       setShowAddHospitalForm(true);
       setShowAddNewHospital(false);
       setSelectedHospital(null)
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
       debugger;

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

    function editHospital(hospital){
     // debugger;
        setShowAddHospitalForm(true);
        setShowAddNewHospital(false);
        setSelectedHospital(hospital);
    }

    function saveUpdatedHospital(hospital){
      const newHospitalList = hospitalList;
      const index = newHospitalList.findIndex(
          function (h) {
            return h.hospital_id == hospital.hospital_id;
          }
        )
          newHospitalList[index]=hospital;
          setHospitalList(newHospitalList);
          setShowAddHospitalForm(false);
          setShowAddNewHospital(true);
          setSelectedHospital(null);

    }

    return <div>{showAddNewHospital &&
    <button className="btn btn-info mt-2 mb-3 mr-2 float-right" onClick={onAddNewHospital}>Add New Hospital</button>
     }

     {showAddHospitalForm &&
     	<AddHospitalForm 
       hideHospitalForm={hideHospitalForm}
       addHospital={addHospital}
      saveUpdatedHospital={saveUpdatedHospital}
      hospital={selectedHospital}></AddHospitalForm>
     }

    <HospitalList list={hospitalList} deleteHospital={deleteHospital}
    editHospital={editHospital}></HospitalList>
    </div>
}
export default HospitalManagement;