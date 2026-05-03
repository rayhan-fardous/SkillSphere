import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import courses from "@/data/courses.json";
import {
  FaRegClock,
  FaStar,
  FaCheckCircle,
  FaPlayCircle,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";

const CourseDetails = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isLoggedIn = !!session;
  const { id } = await params;

  if (!isLoggedIn) {
    redirect(`/login?callbackUrl=/courses/${id}`);
  }

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-3">
            Course Not Found
          </h2>
          <p className="text-gray-500">
            The course you're looking for does not exist.
          </p>
        </div>
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-4xl overflow-hidden shadow-xl border border-gray-100">
        <div className="relative h-125">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl px-6 sm:px-10 lg:px-16 text-white">
              <span className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                {course.category}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {course.title}
              </h1>

              <p className="text-gray-200 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <IoPersonOutline className="w-5 h-5 text-blue-400" />
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span>{course.rating} Rating</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaRegClock className="w-5 h-5 text-purple-400" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <AiOutlineThunderbolt className="w-5 h-5 text-pink-400" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-6 sm:p-10 lg:p-14">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Course Curriculum
              </h2>

              <p className="text-gray-500 max-w-2xl">
                Follow a structured learning path designed to help you master
                the course step by step.
              </p>
            </div>

            <div className="space-y-5">
              {curriculum.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shrink-0">
                    <FaPlayCircle className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Lesson {idx + 1}</p>
                    <h3 className="font-semibold text-gray-900">{item}</h3>
                  </div>

                  <FaCheckCircle className="ml-auto text-green-500 w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Start?
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Join thousands of learners and improve your skills with this
                  premium course.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Instructor</span>
                  <span className="font-medium text-gray-800">
                    {course.instructor}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium text-gray-800">
                    {course.duration}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Level</span>
                  <span className="font-medium text-gray-800">
                    {course.level}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-medium text-gray-800">
                    {course.rating}
                  </span>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-blue-600 hover:shadow-xl transition-all duration-300">
                Enroll Now
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Lifetime access • Certificate included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
