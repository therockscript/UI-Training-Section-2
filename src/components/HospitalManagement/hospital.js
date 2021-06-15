function Hospital(props) {
    const { hospital } = props;
    return <tr>
        <td>{hospital.hospital_id}</td>
        <td>{hospital.hospital_name}</td>
        <td>{hospital.hospital_place}</td>
        <td>{hospital.no_of_beds}</td>
        <td></td>
    </tr>;
}
export default Hospital;