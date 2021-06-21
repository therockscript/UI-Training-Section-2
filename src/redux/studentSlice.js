import { createSlice } from "@reduxjs/toolkit";
import StudentJSON from '../data/student.json';

export const studentSlice = createSlice({
    name: "student",
    initialState: {
        list: StudentJSON
    },
    reducers: {
        addStudent: (state, action) => {
            debugger
        },
        updateStudent: (state, action) => {
            debugger
        },
        deleteStudent: (state, action) => {
            const rollNumber = action.payload;
            const currentList = state.list;
            const index = currentList.findIndex((s) => s.rollNumber == rollNumber);
            currentList.splice(index, 1);
            state.list = currentList;
        },
    }
});

export const { addStudent, updateStudent, deleteStudent} = studentSlice.reducer;
export default studentSlice.reducer;