import React, { useState } from "react";
import Sidebar from "../components/SidebarTopics"; // Create Sidebar component
import ArticleCard from "../components/ArticleCard"; // Create ArticleCard component

function CoursePage() {
  const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);

  // Sample subtopics (you can replace with your actual data)
  const subtopics = [
    "Introduction to Financial Markets",
    "Basics of Stock Markets",
    "Introduction to Insurance",
    "Understanding the Capital Asset Pricing Model (CAPM)",
    "Role of Financial Intermediaries",
  ];

  const handleNext = () => {
    setSelectedSubtopicIndex((prevIndex) =>
      prevIndex < subtopics.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleBack = () => {
    setSelectedSubtopicIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        subtopics={subtopics}
        selectedSubtopic={subtopics[selectedSubtopicIndex]}
        onSelectSubtopic={(index) => setSelectedSubtopicIndex(index)}
      />

      {/* Main content */}
      <div className="flex-grow w-5/6 p-8">
        <ArticleCard
          subtopic={subtopics[selectedSubtopicIndex]}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}

export default CoursePage;
