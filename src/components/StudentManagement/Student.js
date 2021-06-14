function Student(props) {
    const { student } = props;

    return <tr>
        <td>{student.roll_number}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.address}</td>
        <td></td>
    </tr>;
}

export default Student;