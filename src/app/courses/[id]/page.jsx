import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import courses from "@/data/courses.json";
import { FaRegClock, FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";

const CourseDetails = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const isLoggedIn = !!session;
  const { id } = await params;

  if (!isLoggedIn) {
    redirect(`/login?callbackUrl=/courses/${id}`);
  }

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Course not found
      </div>
    );
  }

  const curriculum = [
    "Introduction & Setup",
    "Core Fundamentals",
    "Advanced Concepts",
    "Real-World Projects",
    "Final Assessment",
  ];

  return (
    <div className="py-16 px-8 max-w-5xl mx-auto w-full">
      <div className="bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden">
        <div className="relative h-100 w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center p-10">
            <div className="text-white max-w-2xl">
              <span className="badge badge-primary mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-200 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <IoPerson className="h-5 w-5 text-gray-500" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="h-5 w-5 text-warning" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock className="h-5 w-5 text-gray-300" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineThunderbolt className="h-5 w-5 text-gray-300" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <ul className="steps steps-vertical w-full">
              {curriculum.map((item, idx) => (
                <li key={idx} className="step step-primary w-full text-left">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">Ready to start?</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Join thousands of students and level up your skills today.
                </p>
                <button className="btn btn-primary w-full text-white btn-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
