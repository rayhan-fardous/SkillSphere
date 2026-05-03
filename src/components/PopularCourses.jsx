import React from "react";
import Link from "next/link";
import Image from "next/image";
import courses from "@/data/courses.json";
import { FaArrowRight, FaStar, FaRegClock } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";

const PopularCourses = () => {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-12">
        <div className="bg-yellow-100 p-3 rounded-full">
          <FaStar className="h-6 w-6 text-yellow-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Popular Courses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topCourses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {course.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 min-h-15">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                {course.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <IoPersonOutline className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRegClock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <AiOutlineThunderbolt className="w-4 h-4 text-pink-600" />
                    <span className="text-sm">{course.level}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-gray-800">
                    {course.rating}
                  </span>
                </div>
              </div>

              <Link
                href={`/courses/${course.id}`}
                className="group/button inline-flex items-center justify-center w-full gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-[1.02] hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                View Details
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
