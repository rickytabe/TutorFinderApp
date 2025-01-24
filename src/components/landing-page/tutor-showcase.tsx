const TutorShowcase = () => {
  const tutors = [
    {
      name: "Dr. Sarah Johnson",
      expertise: "Machine Learning & Python",
      experience: "8+ years",
      rating: 4.98,
      students: 1200,
      price: 85,
      priceUnit: "/hr",
      available: true,
      image: "",
      badges: ["Top Rated", "AI Expert"],
    },
    {
      name: "Michael Chen",
      expertise: "Advanced Mathematics",
      experience: "5+ years",
      rating: 4.95,
      students: 850,
      price: 65,
      priceUnit: "/hr",
      available: false,
      image: "👨🏫",
      badges: ["Exam Specialist"],
    },
    {
      name: "Emily Rodriguez",
      expertise: "Web Development",
      experience: "6+ years",
      rating: 4.97,
      students: 980,
      price: 75,
      priceUnit: "/hr",
      available: true,
      image: "👩💻",
      badges: ["Career Coach"],
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Expert Tutors
          </h2>
          <p className="text-gray-400 text-xl">
            5000+ verified professionals ready to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300"
             >
              {/* Availability Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1  rounded-full text-sm ${
                  tutor.available
                    ? "bg-green-900/30 text-green-400"
                    : "bg-red-900/30 text-red-400"
                }`}
              >
                {tutor.available ? "Available Now" : "Fully Booked"}
              </div>

              <div className="flex items-center mb-6 mt-10 md:mt-0">
                <div className="w-20 h-20 rounded-full bg-blue-900/50 flex items-center justify-center text-4xl mr-4">
                  {tutor.image}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {tutor.name}
                  </h3>
                  <p className="text-blue-400">{tutor.expertise}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {tutor.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-gray-400 mb-6">
                <p>⭐ {tutor.rating}/5 Rating</p>
                <p>🎓 {tutor.experience} Experience</p>
                <p>👥 {tutor.students}+ Students</p>
              </div>

              {/* Price and Action Section */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-gray-400 text-sm">Starting from</p>
                  <p className="text-2xl font-bold text-white">
                    ${tutor.price}
                    <span className="text-gray-400 text-lg ml-1">
                      {tutor.priceUnit}
                    </span>
                  </p>
                </div>
                <button
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    tutor.available
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!tutor.available}
                >
                  {tutor.available ? "Book Now" : "Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors">
            Browse All Tutors →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorShowcase;
