
import React, { createContext, useState, useContext } from "react";
import initialStudents from "../Students/StudentsList";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);
  const [savedStudents, setSavedStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [showSaved, setShowSaved] = useState(false);

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const saveStudent = (student) => {
    if (!savedStudents.find((s) => s.id === student.id)) {
      setSavedStudents([...savedStudents, student]);
    }
  };

  const filtered = (showSaved ? savedStudents : students).filter((student) =>
    `${student.name} ${student.surname}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <StudentContext.Provider
      value={{
        students: filtered,
        deleteStudent,
        saveStudent,
        setSearch,
        search,
        setShowSaved,
        showSaved,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
