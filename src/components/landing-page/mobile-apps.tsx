import { useState } from "react";

const MobileAppCTA = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email collection logic here
    console.log("Email submitted:", email);
    setShowModal(false);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Learn On The Go
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Access expert tutors and track your progress from anywhere with our mobile app
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <img 
              src="https://i.pinimg.com/736x/2f/32/1d/2f321d5a70bfb8875db20a7c552f62fa.jpg" 
              alt="Google Play" 
              className="w-6 h-6 mr-2"
            />
            Google Play
          </button>
          
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <img
              src="https://i.pinimg.com/236x/46/da/02/46da027e347d0f8a21a9589aee4d243c.jpg"
              alt="App Store"
              className="w-6 h-6 mr-2"
            />
            App Store
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
              <button
                onClick={() => setShowModal(false)}
                className="float-right text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
              
              <div className="text-center pt-8">
                <div className="mb-6 animate-bounce">
                  <svg
                    className="w-16 h-16 mx-auto text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Mobile App Coming Soon!
                </h3>
                
                <p className="text-gray-100 mb-6">
                  We're working hard to bring you the best mobile learning experience. 
                  Be the first to know when we launch!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileAppCTA;