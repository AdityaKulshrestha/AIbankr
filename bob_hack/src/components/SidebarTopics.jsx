import React from "react";

function Sidebar({ subtopics, selectedSubtopic, onSelectSubtopic }) {
  return (
    <div className="w-[300]px min-h-screen bg-gray-200 p-4">
      <ul>
        {subtopics.map((subtopic, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer ${
              selectedSubtopic === subtopic ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => {
              console.log(`Subtopic selected: ${subtopic}`);
              onSelectSubtopic(index);
            }}
          >
            {subtopic}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
