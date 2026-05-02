"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import coursesData from "@/data/courses.json";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

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

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">Explore our wide range of skill-based programs and level up your career today.</p>
        
        <div className="max-w-md mx-auto relative">
          <input 
            type="text" 
            placeholder="Search courses by title..." 
            className="input input-bordered w-full pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
        {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-500">No courses found matching "{searchQuery}"</h3>
          <button onClick={() => setSearchQuery("")} className="btn btn-ghost mt-4">Clear Search</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <figure className="relative h-56 w-full shrink-0">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              </figure>
              <div className="card-body flex flex-col grow">
                <h3 className="card-title text-xl items-start mb-2">{course.title}</h3>
                <p className="text-gray-600 grow text-sm">{course.description}</p>
                <div className="flex items-center gap-2 mt-4">
                  <IoPerson className="h-5 w-5 text-gray-500"/>
                  <span className="text-sm text-gray-600">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FaStar className="h-5 w-5 text-warning"/>
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="card-actions justify-end mt-4 shrink-0">
                  <Link href={`/courses/${course.id}`} className="btn btn-primary w-full group">
                    Details
                    <FaAngleRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
