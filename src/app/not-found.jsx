import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-gray-100">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          The page you are looking for may have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-medium shadow-md hover:shadow-xl hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            <FaArrowLeft className="w-4 h-4" />
            Return Home
          </Link>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;