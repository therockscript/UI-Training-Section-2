import students from '../../data/student.json';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import { useState } from 'react';

function StudentManagement(props) {

    const [showAddStudentForm, setShowAddStudentForm] = useState(false);
    const [showAddNewStudent, setShowAddNeStudent] = useState(true)

    function onAddNewStudent(e) {
        setShowAddStudentForm(true);
        setShowAddNeStudent(false);
    }

    function hideStudentForm(e) {
        setShowAddStudentForm(false);
        setShowAddNeStudent(true);
    }

    return <div>
        {showAddNewStudent && 
            <button type="button" 
                className="btn btn-primary float-right mt-2 mb-2 mr-2"
                onClick={onAddNewStudent}
            >Add new student</button>
        }

        {showAddStudentForm && 
            <AddStudentForm hideStudentForm={hideStudentForm}></AddStudentForm>
        }
        
        <StudentList list={students}></StudentList>
    </div>
}

export default StudentManagement;