
const SocialProof = () => {
  const testimonials = [
    {
      quote: "From complete beginner to job-ready developer in 6 months! The personalized tutoring made all the difference.",
      name: "Sarah Johnson",
      role: "Frontend Developer @TechCorp",
      score: "4.98/5"
    },
    {
      quote: "My math grades improved from C to A+ in just 3 months of weekly sessions. Best investment in my education!",
      name: "Michael Chen",
      role: "High School Student",
      score: "4.95/5"
    }
  ];

  const achievements = [
    { number: "25K+", label: "Active Students" }, // Added active students
    { number: "10K+", label: "Hours Taught" },
    { number: "4.5/5", label: "Average Rating" },
    { number: "98%", label: "Success Rate" }
  ];

const sponsors = ['SkillUp', 'CodeCamp','MathMaster', 'EduTech']

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"> {/* Changed to 4 columns */}
          {achievements.map((item, index) => (
            <div key={index} className="text-center p-10 bg-white rounded-xl shadow-sm border-2 border-grey-500 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {item.number}
              </div>
              <div className="text-black text-sm md:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Rest of the component remains the same */}
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-4 hover:-scale-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">★</span>
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">Rating:</span>
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2">{testimonial.score}</span>
              </div>
            </div>
          ))}
        </div>
         
        {/* Trusted By */}
        <div className="mt-16 text-center">
          <h3 className="text-gray-500 mb-6">Trusted by leading institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            {sponsors.map((sponsors) => (
              <span className="text-2xl font-bold text-gray-700">{sponsors}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;