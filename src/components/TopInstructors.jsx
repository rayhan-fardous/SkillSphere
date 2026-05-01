import React from 'react';
import Image from "next/image";
import courses from "@/data/courses.json";

const TopInstructors = () => {

  const instructors = Array.from(new Set(courses.map(c => c.instructor)))
    .map(name => {
      const course = courses.find(c => c.instructor === name);
      return {
        name,
        image: course?.image || "/logo.png",
        category: course?.category
      };
    }).slice(0, 4);

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Top Instructors</h2>
        <p className="text-gray-600">Learn from the best industry experts</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {instructors.map((inst, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl border border-base-200 items-center text-center hover:-translate-y-2 transition-transform">
            <figure className="px-10 pt-10">
              <div className="w-24 h-24 rounded-full overflow-hidden relative ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src={inst.image} alt={inst.name} fill className="object-cover" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">{inst.name}</h2>
              <p className="text-sm text-primary font-medium">{inst.category} Expert</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;