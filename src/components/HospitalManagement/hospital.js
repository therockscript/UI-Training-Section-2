function Hospital(props) {
    const { hospital, deleteHospital, editHospital} = props;

    function onDelete(){
    	props.deleteHospital(hospital.hospital_id);
    }

    function onEdit(){
        editHospital(hospital);
    }
    
    return <tr>
        <td>{hospital.hospital_id}</td>
        <td>{hospital.hospital_name}</td>
        <td>{hospital.hospital_place}</td>
        <td>{hospital.no_of_beds}</td>
        <td><button className="btn btn-info mr-1" onClick={onEdit}>Edit</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </td>
    </tr>;
}
export default Hospital;