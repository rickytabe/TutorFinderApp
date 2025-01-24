import { useState } from "react";

const PricingTransparency = () => {
    const [activePricing, setActivePricing] = useState('hourly');
    const plans = [
      {
        title: "Pay-As-You-Learn",
        price: "25",
        duration: "hour",
        features: [
          "Flexible session booking",
          "Choose from all tutors",
          "No long-term commitment",
          "24/7 customer support",
          "Free session recordings"
        ],
        recommended: false,
        type: 'hourly'
      },
      {
        title: "Learning Package",
        price: "199",
        duration: "5 hours",
        features: [
          "Save 20% on hourly rate",
          "Priority tutor matching",
          "Progress tracking dashboard",
          "Free resource library access",
          "Monthly skill assessments"
        ],
        recommended: true,
        type: 'package'
      },
      {
        title: "Premium Membership",
        price: "99",
        duration: "month",
        features: [
          "Unlimited session hours",
          "Dedicated learning coach",
          "Certification preparation",
          "1:1 Career counseling",
          "Exclusive workshops"
        ],
        recommended: false,
        type: 'package'
      }
    ];
  
    const filteredPlans = plans.filter(plan => plan.type === activePricing);
  
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-400 text-xl">
              Choose the plan that fits your learning goals
            </p>
          </div>
  
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-2 rounded-xl">
              <button 
                onClick={() => setActivePricing('hourly')}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activePricing === 'hourly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Hourly
              </button>
              <button 
                onClick={() => setActivePricing('package')}
                className={`px-6 py-3 rounded-lg ml-2 transition-colors ${
                  activePricing === 'package' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Packages
              </button>
            </div>
          </div>
  
          <div className={`grid grid-cols-1 gap-8 ${
            activePricing === 'hourly' ? 'md:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gray-800 rounded-2xl p-8 ${
                  plan.recommended 
                    ? "border-2 border-blue-500" 
                    : "border border-gray-700"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.title}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    / {plan.duration}
                  </span>
                </div>
  
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex}
                      className="flex items-center text-gray-400"
                    >
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
  
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.recommended
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
  
          {/* Guarantee Section */}
          <div className="mt-12 text-center bg-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Satisfaction Guarantee
              </h3>
              <p className="text-gray-400">
                Get a full refund if you're not satisfied with your first session
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default PricingTransparency;