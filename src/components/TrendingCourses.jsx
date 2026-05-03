import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "@/data/courses.json";
import { FaArrowTrendUp, FaArrowRight } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

const TrendingCourses = () => {
  const trendingCourses = [...courses].reverse().slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-linear-to-br from-slate-50 to-gray-100 rounded-4xl p-8 sm:p-10 lg:p-14 shadow-sm">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <FaArrowTrendUp className="w-4 h-4" />
            <span className="text-sm font-medium">Popular Right Now</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Trending Courses
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore the most popular and fast-growing courses learners are
            enrolling in right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCourses.map((course) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Trending
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 line-clamp-2">
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
                </div>

                <div className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                  View Course
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
