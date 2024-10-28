import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { courses } from "../utils/courses";

const Courses = () => {
  return (
    <section id="our-course">
      <div className="container mx-auto py-20 px-4">
        <h2 className="title">
          Biz oʻrgatadigan kurslar
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative p-4 rounded-[44px] shadow-md group overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
                style={{ backgroundImage: `url(${course.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-300 rounded-[44px]"></div>
              <div className="relative z-10 pt-36 pb-5 pl-5">
                <h3 className="text-2xl font-semibold text-white">
                  {course.title}
                </h3>
                <button className="flex items-center font-medium gap-2 hover:scale-105 transition duration-300 mt-4 px-4 py-2 bg-primary text-white rounded-xl">
                  Batafsil
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          ))}

          {/* Card 6 - Coming Soon */}
          <div className="relative p-14 md:p-4 rounded-[44px] bg-bgCard flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl w-full text-center md:w-44 font-bold text-lightDark">
              Tez orada yangi kurs!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
