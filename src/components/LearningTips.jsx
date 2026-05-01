import React from 'react';

const LearningTips = () => {

  const tips = [
  {
    title: "Mind Mapping",
    desc: "Create visual diagrams to connect ideas and improve understanding.",
    icon: "M3 12h18M12 3v18"
  },
  {
    title: "Note Taking",
    desc: "Write short summaries while studying to reinforce memory.",
    icon: "M8 6h8M8 10h8M8 14h5M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
  },
  {
    title: "Goal Setting",
    desc: "Set small daily learning goals to stay motivated and focused.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto w-full bg-base-200 rounded-3xl my-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Learning Tips</h2>
        <p className="text-gray-600">Boost your productivity with these proven strategies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, idx) => (
          <div key={idx} className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tip.icon} />
              </svg>
              <h3 className="card-title text-lg">{tip.title}</h3>
              <p className="text-sm text-gray-500">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningTips;