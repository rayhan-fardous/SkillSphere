"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import courses from "@/data/courses.json";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="rounded-3xl"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-6 sm:p-8 md:p-10 lg:p-14">
                  <div className="order-2 lg:order-1 text-center lg:text-left">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-4">
                      {course.category}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                      {course.title}
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8 text-sm sm:text-base">
                      <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-700">
                        <IoPersonOutline className="w-5 h-5 text-blue-600" />
                        <span>{course.instructor}</span>
                      </div>

                      <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-700">
                        <FaRegClock className="w-5 h-5 text-purple-600" />
                        <span>{course.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-700">
                        <FaRegStar className="w-5 h-5 text-yellow-500" />
                        <span>{course.rating}</span>
                      </div>

                      <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-700">
                        <AiOutlineThunderbolt className="w-5 h-5 text-pink-600" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <button className="group inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-7 py-3 rounded-xl shadow-md hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Enroll Now
                        <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>

                  <div className="order-1 lg:order-2 flex justify-center">
                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                      <div className="absolute -top-4 -left-4 w-full h-full bg-gray-200 rounded-3xl"></div>

                      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-112.5 w-full">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
