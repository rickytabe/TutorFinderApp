const AnimateText = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
        {/* Animated Text */}
        <div className="animate-bounce">
          <div className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%]">
            Welcome. TutorFinder is coming soon, come back later.
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mt-4 text-center">
          <p className="text-lg">
            Take a look at our GitHub repo:
            <div className="p-2 bg-blue-600 mt-2 hover:bg-blue-300 text-white rounded-md">
                <a
                  href="https://github.com/rickytabe/TutorFinderApp.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-0  hover:text-gray-800"
                >
                  See Repository
                </a>
            </div>
          </p>
        </div>
      </div>
    );
  };
  
  export default AnimateText;
  