import React from "react";
import { teachersData } from "../utils/teachers";

const Teachers = () => {
  return (
    <section id="our-teachers">
      <div className="container mx-auto px-4">
        <h2 className="title">Bizning ustozlarimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teachersData.map((teacher, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center justify-center p-4 rounded-md"
            >
              <img
                className="w-60 h-60 rounded-full object-cover"
                src={teacher.image}
                alt='Teacher Image'
              />
              <div className="flex flex-col gap-3 items-center">
                <div className="text-2xl font-semibold text-lightDark">
                  {teacher.name}
                </div>
                <div className="flex gap-2">
                  <img src={teacher.icon} alt="" className="w-7 h-7" />
                  <span className="text-xl font-semibold text-lightDark">
                    {teacher.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
