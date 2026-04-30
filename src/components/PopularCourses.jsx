import React from 'react';
import Image from 'next/image';
import courses from "@/data/courses.json";
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const PopularCourses = () => {

  const topCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-center gap-3 mb-10">
        <FaStar className="h-8 w-8 text-primary"/>
        <h2 className="text-3xl font-bold">Popular Courses</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topCourses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
            <figure className="relative h-56 w-full">
              <Image
                src={course.image} 
                alt={course.title}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl h-14 items-start">{course.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <IoPerson className="h-5 w-5 text-gray-500"/>
                
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                
                <FaStar className="h-5 w-5 text-warning"/>
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline flex items-center btn-primary w-full group">
                  View Details
                  <FaArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;