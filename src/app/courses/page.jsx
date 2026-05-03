"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import coursesData from "@/data/courses.json";
import { FaStar, FaAngleRight, FaSearch, FaRegClock } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";

const AllCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(coursesData);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Explore Courses
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          All Courses
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Explore our wide range of skill-based programs and level up your
          career with expert-led online courses.
        </p>

        <div className="max-w-xl mx-auto relative">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search courses by title..."
            className="w-full border border-gray-200 rounded-2xl py-4 pl-14 pr-5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      ) : filteredCourses.length === 0 ? (
     
        <div className="text-center py-24 bg-gray-50 rounded-3xl">
          <h3 className="text-2xl font-bold text-gray-700 mb-3">
            No courses found
          </h3>

          <p className="text-gray-500 mb-6">
            No results matched "{searchQuery}"
          </p>

          <button
            onClick={() => setSearchQuery("")}
            className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
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

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 grow">
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
                  className="group/button inline-flex items-center justify-center gap-2 w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-[1.02] hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  View Details
                  <FaAngleRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllCourses;
