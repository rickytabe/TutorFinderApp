
const TrustAndSecurity = () => {
  const features = [
    {
      title: "Bank-Grade Encryption",
      description: "256-bit SSL protection for all data transactions",
      icon: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuY3J5cHRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Secure Payments",
      description: "PCI-DSS compliant payment processing",
      icon: "https://i.pinimg.com/736x/2d/8f/2d/2d8f2d0c852509c079562c441baeec2d.jpg",
      badges: [
        {
          name: "Visa",
          logo: "https://i.pinimg.com/736x/2d/8f/2d/2d8f2d0c852509c079562c441baeec2d.jpg",
        },
        {
          name: "Mastercard",
          logo: "https://i.pinimg.com/236x/48/40/de/4840deeea4afad677728525d165405d0.jpg",
        },
        {
          name: "paypal",
          logo: "https://i.pinimg.com/236x/f4/22/30/f42230e621c19fea5815dde7a09ed83c.jpg",
        },
        {
          name: "MoMo",
          logo: "https://i.pinimg.com/236x/7b/9f/ce/7b9fce7a65a393b17d61f4061f7e7375.jpg",
        },
      ],
    },
    {
      title: "Identity Verification",
      description: "Multi-factor authentication for all tutors",
      icon: "https://i.pinimg.com/236x/c8/db/a6/c8dba6d8af23b872500d8386f71dd15b.jpg",
    },
    {
      title: "Privacy First",
      description: "GDPR compliant data protection",
      icon: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByaXZhY3klMjBwcm90ZWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-gray-50 text-xl">
            We protect every interaction on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-100 mb-4">{feature.description}</p>

              {feature.badges && (
                <div className="flex items-center space-x-2 mt-4">
                  {feature.badges.map((badge) => (
                    <img
                      key={badge.name}
                      src={badge.logo}
                      alt={badge.name}
                      className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-50 px-6 py-3 rounded-full">
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-green-700 font-medium">
              Trusted by 30,000+ learners worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndSecurity;
