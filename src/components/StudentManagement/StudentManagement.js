import students from "../../data/student.json";
import StudentList from "./StudentList";
import AddStudentForm from "./AddStudentForm";
import { useState } from "react";

function StudentManagement(props) {
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showAddNewStudent, setShowAddNeStudent] = useState(true);
  const [studentList, setStudentList] = useState(students);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showList, setShowList] = useState(true);

  function onAddNewStudent(e) {
    setShowAddStudentForm(true);
    setShowAddNeStudent(false);
    setSelectedStudent(null);
    setShowList(false);
  }

  function hideStudentForm(e) {
    setShowAddStudentForm(false);
    setShowAddNeStudent(true);
    setShowList(true);
  }

  function saveUpdatedStudent(student) {
    const newStudentList = studentList;
    const index = newStudentList.findIndex(
      function (s) {
        return s.rollNumber == student.rollNumber;
      }
    )
    newStudentList[index] = student;
    setStudentList(newStudentList);
    setShowAddStudentForm(false);
    setShowAddNeStudent(true);
    setSelectedStudent(null);
    setShowList(true);
  }

  function addStudent(student) {
    const newStudentList = [...studentList, student];
    setStudentList(newStudentList);
    setShowAddStudentForm(false);
    setShowAddNeStudent(true);
    setShowList(true);
  }

  function deleteStudent(rollNumber) {
    // const index = studentList.findIndex(student => student.rollNumber === rollNumber);
    const index = studentList.findIndex(
        function (student) {
            return student.rollNumber == rollNumber;
        }
    );
    studentList.splice(index, 1);
    setStudentList([...studentList]);
  }

  function editStudent(student) {
    setShowAddStudentForm(true);
    setShowAddNeStudent(false);
    setSelectedStudent(student);
    setShowList(false);
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
          saveUpdatedStudent={saveUpdatedStudent}
          hideStudentForm={hideStudentForm}
          student={selectedStudent}
        ></AddStudentForm>
      )}

      {showList && <StudentList list={studentList} 
        deleteStudent={deleteStudent}
        editStudent={editStudent}
        ></StudentList>
      }
    </div>
  );
}

export default StudentManagement;
