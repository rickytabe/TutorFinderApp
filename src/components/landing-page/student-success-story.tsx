import { useState } from "react";

interface Story {
  id: number;
  name: string;
  role: string;
  image: string;
  before: { skill: string; level: string };
  after: { skill: string; level: string };
  hours: number;
  earnings: string;
  badges: string[];
  category: string;
  video?: string;
  quote: string;
}

const StudentSuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // YouTube video ID extractor
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const stories: Story[] = [
    {
      id: 1,
      name: "Tabe Marie",
      role: "UX Designer @ TechCo",
      image: "avatar-ux.jpg",
      before: { skill: "Figma", level: "Beginner" },
      after: { skill: "Figma", level: "Advanced" },
      hours: 40,
      earnings: "+$28k Salary",
      badges: ["Adobe Certified", "Promotion"],
      category: "design",
      video: "https://youtu.be/2K1D51MLIWw?si=EDAfZzB2XWcePe3B",
      quote: "From basic prototypes to leading design teams!",
    },
    {
      id: 2,
      name: "Fru Peter",
      role: "Full Stack Developer",
      image: "avatar-dev.jpg",
      before: { skill: "JavaScript", level: "Novice" },
      after: { skill: "React/Node", level: "Expert" },
      hours: 120,
      earnings: "Freelance to $95k Job",
      badges: ["AWS Certified", "Top Rated"],
      category: "coding",
      video:'https://www.youtube.com/watch?v=25R8li8EokY',
      quote: "Landing page ➔ Complex SaaS platforms!",
    },
    {
      id: 3,
      name: "Peter Gomez",
      role: "Bilingual Account Manager",
      image: "avatar-lang.jpg",
      before: { skill: "Business English", level: "Intermediate" },
      after: { skill: "Negotiation", level: "Fluent" },
      hours: 60,
      earnings: "3 Promotions in 2 Years",
      badges: ["TOEFL 115", "Leadership"],
      category: "language",
      quote: "Confidence to lead international deals",
    },
  ];

  const filteredStories =
    activeCategory === "all"
      ? stories
      : stories.filter((story) => story.category === activeCategory);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transformative Learning Journeys
          </h2>
          <p className="text-indigo-200 text-xl">
            Real outcomes from our global learning community
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-start  space-x-4 md:justify-center overflow-x-scroll scrollbar-hide mb-6">
          {["all", "coding", "design", "language","Machine Learning"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-white text-blue-900 font-bold"
                  : "text-indigo-200 hover:bg-white/20"
              }`}
              aria-label={`Filter ${cat} stories`}
              role="switch"
              aria-checked={activeCategory === cat}
              aria-controls={`stories-${cat}`}
            >
              {cat === "all"
                ? "All"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Interactive Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-indigo-200 text-xl">
                No stories found for this category
              </p>
            </div>
          )}
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => {
                if (story.video) {
                  setSelectedStory(story);
                }
              }}
            >
              {/* Progress Ribbon */}
              <div className="absolute top-0 left-0 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-tr-xl text-xs">
                {story.hours}h Mastery Path
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full border-2 border-white/20"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{story.name}</h3>
                  <p className="text-indigo-200">{story.role}</p>
                </div>
              </div>

              {/* Skill Comparison */}
              <div className="bg-black/20 p-4 rounded-xl mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-red-400">Before →</span>
                  <span className="text-green-400">After →</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-white font-bold">{story.before.skill}</p>
                    <p className="text-indigo-300 text-sm">
                      {story.before.level}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{story.after.skill}</p>
                    <p className="text-indigo-300 text-sm">
                      {story.after.level}
                    </p>
                  </div>
                </div>
              </div>

              {/* Earnings & Badges */}
              <div className="mb-6">
                <div className="text-emerald-400 font-bold text-lg mb-2">
                  {story.earnings}
                </div>
                <div className="flex flex-wrap gap-2">
                  {story.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-indigo-200 italic">"{story.quote}"</p>

              {story.video && (
                <div className="mt-4 flex items-center text-blue-400 hover:text-blue-300">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Journey
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-3xl font-bold text-green-400">1.2k+</div>
            <div className="text-indigo-200">Career Advances</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-3xl font-bold text-blue-400">98%</div>
            <div className="text-indigo-200">Skill Improvement</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-3xl font-bold text-purple-400">4.8/5</div>
            <div className="text-indigo-200">Satisfaction Rate</div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="text-3xl font-bold text-yellow-400">50k+</div>
            <div className="text-indigo-200">Lessons Completed</div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedStory?.video && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl p-4">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute -top-8 right-0 text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYouTubeId(
                    selectedStory.video
                  )}`}
                  onLoad={() => setIsVideoLoading(false)}
                  className={`rounded-xl ${
                    isVideoLoading ? "invisible" : "visible"
                  }`}
                  title="Student success story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentSuccessStories;
