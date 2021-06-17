function Student(props) {
    const { student, deleteStudent, editStudent } = props;

    function onDelete() {
        props.deleteStudent(student.rollNumber);
    }

    function onEdit() {
        editStudent(student);
    }
    return <tr>
        <td>{student.rollNumber}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.address}</td>
        <td>
            <button className="btn btn-secondary mr-2" onClick={onEdit}>Edit</button>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </td>
    </tr>;
}

export default Student;