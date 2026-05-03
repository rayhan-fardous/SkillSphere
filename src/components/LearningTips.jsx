import React from "react";
import {
  FaBrain,
  FaRegStickyNote,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";

const LearningTips = () => {
  const tips = [
    {
      title: "Mind Mapping",
      desc: "Create visual diagrams to connect ideas and improve understanding.",
      icon: <FaBrain className="w-7 h-7" />,
    },
    {
      title: "Note Taking",
      desc: "Write short summaries while studying to reinforce memory.",
      icon: <FaRegStickyNote className="w-7 h-7" />,
    },
    {
      title: "Goal Setting",
      desc: "Set small daily learning goals to stay motivated and focused.",
      icon: <FaBullseye className="w-7 h-7" />,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-linear-to-br from-slate-50 to-gray-100 rounded-4xl p-8 sm:p-10 lg:p-14 shadow-sm">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <FaLightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">Study Smarter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Learning Tips
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Boost your productivity and improve your learning experience with
            these proven study strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {tip.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                {tip.desc}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-linear-to-r from-blue-600 to-purple-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;