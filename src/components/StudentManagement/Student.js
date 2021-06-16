function Student(props) {
    const { student, deleteStudent } = props;

    function onDelete() {
        props.deleteStudent(student.rollNumber);
    }
    return <tr>
        <td>{student.rollNumber}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.address}</td>
        <td>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </td>
    </tr>;
}

export default Student;