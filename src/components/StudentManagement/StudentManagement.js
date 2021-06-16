import students from "../../data/student.json";
import StudentList from "./StudentList";
import AddStudentForm from "./AddStudentForm";
import { useState } from "react";

function StudentManagement(props) {
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showAddNewStudent, setShowAddNeStudent] = useState(true);
  const [studentList, setStudentList] = useState(students);

  function onAddNewStudent(e) {
    setShowAddStudentForm(true);
    setShowAddNeStudent(false);
  }

  function hideStudentForm(e) {
    setShowAddStudentForm(false);
    setShowAddNeStudent(true);
  }

  function addStudent(student) {
    const newStudentList = [...studentList, student];
    setStudentList(newStudentList);
    setShowAddStudentForm(false);
    setShowAddNeStudent(true);
  }

  function deleteStudent(rollNumber) {
      debugger;
    // const index = studentList.findIndex(student => student.rollNumber === rollNumber);
    const index = studentList.findIndex(
        function (student) {
            return student.rollNumber == rollNumber;
        }
    );
    studentList.splice(index, 1);
    setStudentList([...studentList]);
  }

  return (
    <div>
      {showAddNewStudent && (
        <button
          type="button"
          className="btn btn-primary float-right mt-2 mb-2 mr-2"
          onClick={onAddNewStudent}
        >
          Add new student
        </button>
      )}

      {showAddStudentForm && (
        <AddStudentForm
          addStudent={addStudent}
          hideStudentForm={hideStudentForm}
        ></AddStudentForm>
      )}

      <StudentList list={studentList} deleteStudent={deleteStudent}></StudentList>
    </div>
  );
}

export default StudentManagement;
