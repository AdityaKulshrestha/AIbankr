import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col">
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p className="text-gray-600">{course.description}</p>
      <button
        className="flex bg-bob-pri text-white py-1 px-3 mx-auto mt-auto"
        onClick={onClick}
      >
        Start Learning
      </button>
    </div>
  );
}

export default CourseCard;
