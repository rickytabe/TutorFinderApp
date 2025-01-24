import { useMemo } from "react";

interface Skill {
  name: string;
  demand: string;
  level: number;
}

const getDemandColor = (level: number) => {
  switch(level) {
    case 5: return "from-red-500 to-pink-600";
    case 4: return "from-orange-500 to-yellow-600";
    case 3: return "from-green-500 to-cyan-600";
    default: return "from-gray-500 to-blue-600";
  }
};

const TrendingSkills = () => {
  const skills: Skill[] = [
    { name: "AI & Machine Learning", demand: "High", level: 4 },
    { name: "Web Development", demand: "Very High", level: 5 },
    { name: "Data Science", demand: "Peak", level: 5 },
    { name: "Mobile Development", demand: "High", level: 4 },
    { name: "Cybersecurity", demand: "Growing", level: 3 },
    { name: "Cloud Computing", demand: "High", level: 4 },
    { name: "UI/UX Design", demand: "Very High", level: 5 },
    { name: "DevOps", demand: "High", level: 4 },
    { name: "Blockchain", demand: "Emerging", level: 2 },
    { name: "Game Development", demand: "Stable", level: 3 },
    { name: "AR/VR", demand: "Growing", level: 3 },
    { name: "Quantum Computing", demand: "Emerging", level: 2 },
  ];

  const duplicatedSkills = useMemo(() => [...skills, ...skills], [skills]);

  const animationStyles = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-scroll-left {
      animation: scroll-left 40s linear infinite;
    }
    .animate-scroll-right {
      animation: scroll-right 40s linear infinite;
    }
    .scroll-container:hover .animate-scroll-left,
    .scroll-container:hover .animate-scroll-right {
      animation-play-state: paused;
    }
  `;

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <div className={`group relative min-w-[280px] mx-4 bg-gradient-to-r ${getDemandColor(skill.level)} p-0.5 rounded-2xl transition-all hover:scale-105 flex-shrink-0`}>
      <div className="bg-gray-900 rounded-2xl p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/90 font-semibold text-lg">
            {skill.name}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
            {skill.demand} Demand
          </span>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mr-1 ${i < skill.level ? 'bg-blue-400' : 'bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-900">
      <style>{animationStyles}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending Skills This Month
          </h2>
          <p className="text-gray-400 text-xl">
            Most in-demand skills based on student requests
          </p>
        </div>

        {/* Top Row - Scroll Left */}
        <div className="scroll-container relative h-48 mb-8 overflow-x-auto scrollbar-hide">
          <div className="w-[200%] flex animate-scroll-left">
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`top-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Scroll Right */}
        <div className="scroll-container relative h-48 overflow-x-auto scrollbar-hide">
          <div className="w-[200%] flex animate-scroll-right">
            {[...duplicatedSkills].reverse().map((skill, index) => (
              <SkillCard key={`bottom-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors">
            Explore All Skills →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSkills;