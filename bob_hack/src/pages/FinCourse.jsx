import React from "react";
import CourseCard from "../components/Coursecard";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Module 1",
    description:
      "Welcome to the course! In this opening module, you will learn the basics of financial markets, insurance, and CAPM (Capital Asset Pricing Model). This module serves as the foundation of this course.",
  },
  {
    id: 2,
    title: "Module 2",
    description:
      "Dive into some details of behavioral finance, forecasting, pricing, debt, and inflation.",
  },
  {
    id: 3,
    title: "Module 3",
    description:
      "Stocks, bonds, dividends, shares, market caps; what are these? Who needs them? Why? Module 3 explores these concepts, along with corporation basics and some basic financial markets history.",
  },
  {
    id: 4,
    title: "Module 4",
    description:
      "Take a look into the recent past, exploring recessions, bubbles, the mortgage crisis, and regulation.",
  },
  {
    id: 5,
    title: "Module 5",
    description:
      "Options and bond markets are explored in module 5, important components of financial markets.",
  },
  {
    id: 6,
    title: "Module 6",
    description:
      "In module 6, Professor Shiller introduces investment banking, underwriting processes, brokers, dealers, exchanges, and new innovations in financial markets.",
  },
  {
    id: 7,
    title: "Module 7",
    description:
      "Professor Shiller's final module includes lectures about nonprofits and corporations, and your career in finance.",
  },
];

function Courses() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-bob-pri text-3xl font-bold mx-auto text-center mb-4">
        Understand Finance
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => navigate("/module")}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
