

import { useStudents } from "../context/Context"; 

function HeaderPage() {
  const { setSearch, search, setShowSaved, showSaved } = useStudents();

  return (
    <div className="bg-black">
      <div className="flex py-[20px] items-center justify-between">
        <a
          className="ml-[50px] gap-[5px] flex text-white text-[23px]"
          href="#"
        >
          N94 Students
        </a>

        <nav className="gap-[10px] flex items-center mr-[50px]">
          <a
            className="rounded border-2 border-black active:border-[#A259FF] hover:text-[18px] text-semibold text-white text-[16px] px-[20px] py-[7px]"
            href="#"
          >
            Class
          </a>

          <a
            className="rounded border-2 border-black active:border-[#A259FF] hover:text-[18px] text-semibold text-white text-[16px] px-[20px] py-[7px]"
            href="https://erp.student.najottalim.uz"
          >
            Site
          </a>

        
          <div className="flex items-center">
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter Students Name"
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-h-[50px] max-w-[177px] px-4 text-white text-[15px] border border-[#5e4dcd] rounded-l-md bg-transparent focus:border-[#3898EC] focus:outline-none"
            />
            <input
              type="submit"
              value="Search"
              className="min-h-[50px] px-4 py-2 border-none rounded-r-md bg-[#5e4dcd] text-white text-[15px] cursor-pointer transition-colors duration-300 hover:bg-[#5e5dcd]"
            />
          </div>

          <button
            onClick={() => setShowSaved(!showSaved)}
            className="flex items-center bg-[#212121] text-white fill-[#9b9999] px-4 py-2 pl-[0.9em] rounded-[15px] font-extrabold text-[20px] cursor-pointer border-none transition-all duration-300 active:scale-95 hover:bg-black group"
          >
            <div className="w-[30px] h-[30px] transition-transform duration-500 group-hover:scale-125">
              <div className="w-full h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  className="transition-transform duration-300 transform group-hover:translate-x-10 group-hover:scale-110 group-hover:fill-white"
                >
                  <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
                </svg>
              </div>
            </div>
            <span className="ml-1 transition-opacity duration-500 group-hover:opacity-0">
              {showSaved ? "All Students" : "Saved Students"}
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default HeaderPage;
