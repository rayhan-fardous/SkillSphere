"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import courses from "@/data/courses.json";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="w-full h-[60vh] min-h-100 relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url('${course.image}')` }}
            >
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
                <span className="badge badge-primary mb-4">
                  {course.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {course.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-4 max-w-2xl">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-white mb-8">
                  <div className="flex items-center gap-1">
                    <IoPersonOutline className="h-5 w-5 text-gray-300"/>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegStar className="h-5 w-5 text-warning"/>
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegClock className="h-5 w-5 text-gray-300"/>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineThunderbolt className="h-5 w-5 text-gray-300"/>
                    <span>{course.level}</span>
                  </div>
                </div>
                <button className="btn btn-primary flex items-center btn-lg border-none text-white group">
                  Enroll Now
                  <FaArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
