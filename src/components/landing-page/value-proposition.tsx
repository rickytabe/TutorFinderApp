const ValueGrid = () => {
    const features = [
      {
        icon: "⏱️",
        title: "Flexible Scheduling",
        description: "Book lessons 24/7 with tutors across time zones. Reschedule anytime with no penalties."
      },
      {
        icon: "✅", 
        title: "Verified Experts",
        description: "All tutors undergo rigorous screening and background checks. Quality guaranteed."
      },
      {
        icon: "🚀",
        title: "Career-Focused",
        description: "Learn in-demand skills with industry professionals. Get job-ready with personalized coaching."
      }
    ];
  
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose TutorFinder
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Transform your learning experience with our student-first approach
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-800 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="text-4xl mb-6 text-blue-400">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center">
              <p className="text-gray-400 mb-6 text-xl">
                Ready to start your learning journey?
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
                Find Your Perfect Tutor Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ValueGrid