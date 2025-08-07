import React from "react";

const qualifications = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science",
    institution: "Asansol Engineering College (AEC)",
    duration: "2022 - 2026",
    description:
      "CGPA: 8.65 | Core Subjects: Data Structures & Algorithms, Operating Systems, DBMS.",
  },
  {
    id: 2,
    title: "Higher Secondary Education (12th)",
    institution: "ST. Mary Goretti Girls' High School",
    duration: "2019 - 2021",
    description: "Percentage: 70% | Stream: Science (PCM)",
  },
  {
    id: 3,
    title: "Secondary Education (10th)",
    institution: "ST. Mary Goretti Girls' High School",
    duration: "2017 - 2019",
    description: "Percentage: 68%",
  },
];

const Qualification = () => {

  return (
    <div id="qualifications" className="max-w-[1000px] min-h-screen mx-auto py-16 px-6 md:px-20 bg-white dark:bg-[#36404a] transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Qualifications
      </h2>

      <div className="relative border-l-4 border-[#FD6F00] ml-4 md:ml-10">
        {qualifications.map((item) => (
          <div
            key={item.id}
            className="mb-12 ml-6 relative group"
            data-aos="fade-up"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-7 top-2 w-5 h-5 bg-[#FD6F00] rounded-full border-4 border-white dark:border-[#36404a] group-hover:scale-110 transition-transform"></span>

            {/* Card */}
            <div className="bg-gray-50 dark:bg-[#2b333c] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#FD6F00] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.institution}</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">{item.duration}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
