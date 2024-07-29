import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("July");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[340px]">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full p-2 text-gray-600 bg-white border rounded-md shadow-sm outline-none focus:border-indigo-600"
      >
        {selectedMonth || "Select a month"}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => handleMonthSelect(month)}
              className="block w-full px-4 py-2 text-left text-gray-500 hover:bg-gray-100"
            >
              {month}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
