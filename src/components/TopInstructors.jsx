import React from "react";
import Image from "next/image";
import courses from "@/data/courses.json";
import { FaChalkboardTeacher, FaStar, FaUserGraduate } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

const TopInstructors = () => {
  const instructors = Array.from(new Set(courses.map((c) => c.instructor)))
    .map((name) => {
      const course = courses.find((c) => c.instructor === name);

      return {
        name,
        image: course?.image || "/logo.png",
        category: course?.category,
      };
    })
    .slice(0, 4);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
          <FaChalkboardTeacher className="w-4 h-4" />
          <span className="text-sm font-medium">Expert Mentors</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Top Instructors
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Learn from experienced instructors who guide students with real-world
          skills and industry knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((inst, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="h-24 bg-linear-to-r from-blue-600 to-purple-600"></div>

            <div className="flex justify-center -mt-12">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="px-6 pb-6 pt-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <h3 className="text-lg font-bold text-gray-900">{inst.name}</h3>
                <MdOutlineVerified className="text-blue-500 w-5 h-5" />
              </div>

              <p className="text-sm text-purple-600 font-medium mb-4">
                {inst.category} Expert
              </p>

              <div className="flex justify-center gap-6 mb-5 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <FaUserGraduate className="text-blue-600 w-4 h-4" />
                  <span>Students</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500 w-4 h-4" />
                  <span>Top Rated</span>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 hover:shadow-lg transition-all duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
