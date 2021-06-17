import Student from "./Student";

function StudentList(props) {
    const { list, deleteStudent, editStudent } = props;

    return <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Name</th>
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