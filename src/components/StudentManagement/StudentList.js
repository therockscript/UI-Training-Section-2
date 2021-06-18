import Student from "./Student";

function StudentList(props) {
    const { list, deleteStudent, editStudent, sort } = props;

    function onHeaderClick(fieldName, direction) {
        sort(fieldName, direction);
    }
    return <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th onClick={() => onHeaderClick("rollNumber", "ASC")}>Roll Number</th>
                    <th onClick={() => onHeaderClick("name", "DESC")}>Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list && list.map(
                        function(student) {
                            return <Student 
                                student={student} 
                                deleteStudent={deleteStudent}
                                editStudent={editStudent}
                            ></Student>
                        }
                    )
                }
            </tbody>
        </table>
    </div>;
}

export default StudentList;