

import React from "react";
import { useStudents } from "../context/context";

function HeroPage() {
  const { students, deleteStudent, saveStudent } = useStudents();

  return (
    <div className="px-5 py-5">
      <ul className="px-5 py-5 m-auto flex flex-wrap gap-5">
        {students.map((student) => (
          <li
            key={student.id}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center w-[200px] h-[340px]"
          >
            <img
              src={student.img}
              alt={`${student.name} ${student.surname}`}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">
              {student.name} {student.surname}
            </h2>
            <p className="text-gray-600">Age: {student.age}</p>
            <p className="text-gray-600">Region: {student.region}</p>

            <div className="flex py-5 px-1 gap-2">
              {/* Delete */}
              <button
                onClick={() => deleteStudent(student.id)}
                className="flex items-center bg-[#212121] text-white fill-[#9b9999] px-4 py-2 pl-[0.9em] rounded-[15px] font-extrabold text-[14px] cursor-pointer transition-all duration-300 active:scale-95 hover:bg-black group"
              >
                <span className="ml-1 transition-opacity duration-500 group-hover:opacity-0">
                  Delete
                </span>
              </button>

              {/* Save */}
              <button
               
                onClick={() => saveStudent(student)}
                className="flex items-center bg-[#212121] text-white fill-[#9b9999] px-4 py-2 pl-[0.9em] rounded-[15px] font-extrabold text-[14px] cursor-pointer transition-all duration-300 active:scale-95 hover:bg-black group"
              >
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="transition-transform duration-300 transform group-hover:translate-x-5 group-hover:scale-110 group-hover:fill-white"
                  >
                    <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
                  </svg>
                </div>
                <span className="ml-1 transition-opacity duration-500 group-hover:opacity-0">
                  Save
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroPage;

