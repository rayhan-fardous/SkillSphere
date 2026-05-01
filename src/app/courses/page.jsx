import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "@/data/courses.json";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const AllCourses = () => {
  return (
    <div className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of skill-based programs and level up your
          career today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <figure className="relative h-56 w-full shrink-0">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body flex flex-col grow">
              <h3 className="card-title text-xl items-start mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 grow text-sm">{course.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <IoPerson className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {course.instructor}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaStar className="h-5 w-5 text-warning" />
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="card-actions justify-end mt-4 shrink-0">
                <Link
                  href={`/courses/${course.id}`}
                  className="btn btn-primary flex w-full group"
                >
                  Details
                  <FaAngleRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
