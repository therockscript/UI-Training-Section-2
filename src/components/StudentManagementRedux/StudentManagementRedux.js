import { useSelector, useDispatch } from "react-redux";
import { deleteStudentAction } from "../../redux/studentSlice";
import StudentList from '../StudentManagement/StudentList';

function StudentManagementRedux() {
    // const list = useSelector(function (state) {
    //     return state.student.list;
    // });
    const dispatch = useDispatch();
    const list = useSelector((state) => state.student.list);

    function onDeleteStudent(rollNumber) {
        // dispatch(deleteStudentAction(rollNumber));
        dispatch({
            type: "student/deleteStudent",
            payload: rollNumber
        });
    }

    return <div>
        <StudentList 
            list={list}
            deleteStudent={onDeleteStudent}></StudentList>
    </div>
    // <h1>{list.length}</h1>

}

export default StudentManagementRedux;