import students from "../../data/student.json";
import StudentList from "./StudentList";
import AddStudentForm from "./AddStudentForm";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';

function StudentManagement(props) {
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showAddNewStudent, setShowAddNeStudent] = useState(true);
  const [studentList, setStudentList] = useState(students);
  const [masterStudentList, setMasterStudentList] = useState(students);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showList, setShowList] = useState(true);
  const params = useParams();
  const history = useHistory();

  useEffect(function() {
    console.log("StudentManagement useEffect studentList");
    console.log("studentList.length", studentList.length)
    setTimeout(() => {
      history.push("/tic-tac-toe");
    }, 5000)
  });

  function unMountComponent() {
    console.log("unMountComponent");
  }

  useEffect(function() {
    console.log("StudentManagement useEffect studentList");
    console.log("studentList.length", studentList.length);
    return unMountComponent;
  }, []);

  useEffect(function() {
    console.log("StudentManagement useEffect showAddStudentForm");
    console.log("showAddStudentForm", showAddStudentForm);
  }, [showAddStudentForm]);

  useEffect(function() {
    console.log("StudentManagement useEffect studentList");
    console.log("studentList.length", studentList.length)
  }, [studentList, showAddStudentForm]);

  useEffect(function() {

  })

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
    setMasterStudentList(newStudentList);
    setShowAddStudentForm(false);
    setShowAddNeStudent(true);
    setSelectedStudent(null);
    setShowList(true);
  }

  function addStudent(student) {
    const newStudentList = [...studentList, student];
    setStudentList(newStudentList);
    setMasterStudentList(newStudentList);
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
    setMasterStudentList([...studentList]);
  }

  function editStudent(student) {
    setShowAddStudentForm(true);
    setShowAddNeStudent(false);
    setSelectedStudent(student);
    setShowList(false);
  }

  function filter(event) {
    const value = event.target.value;
    const filteredList = masterStudentList.filter(
      function(student) {
        if (("" + student.rollNumber).indexOf(value) > -1) return true;
        else if (student.name.indexOf(value) > -1) return true;
        else if (student.dob.toString().indexOf(value) > -1) return true;
        else if (student.address.indexOf(value) > -1) return true;
        return false;
      }
    );
    setStudentList(filteredList);
  }

  function sort(fieldName, direction) {
    const newStudentList = studentList.sort(
      function(a, b) {
        if (direction === "ASC")
          return ("" + a[fieldName]).localeCompare(("" + b[fieldName]));
        else 
          return !("" + a[fieldName]).localeCompare(("" + b[fieldName]));
      }
    )
    setStudentList([...newStudentList]);
  }

  return (
    <div class="StudentManagement">
      {JSON.stringify(params)}
      <input type="text" 
        class="form-control text-center mt-2" 
        style={{width: "400px", display: "inline-block"}} 
        name="student_search" 
        placeholder="Enter your search..."
        onChange={filter}
      />
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
        sort={sort}
        ></StudentList>
      }
    </div>
  );
}

export default StudentManagement;
