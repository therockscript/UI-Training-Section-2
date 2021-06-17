function Hospital(props) {
    const { hospital, deleteHospital } = props;

    function onDelete(){
    	props.deleteHospital(hospital.hospital_id);
    }

    
    return <tr>
        <td>{hospital.hospital_id}</td>
        <td>{hospital.hospital_name}</td>
        <td>{hospital.hospital_place}</td>
        <td>{hospital.no_of_beds}</td>
        <td><button className="btn btn-info mr-1">Edit</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </td>
    </tr>;
}
export default Hospital;