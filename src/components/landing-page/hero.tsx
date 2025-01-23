import Squares from "../styled-components/Squares.jsx";
import StyledButton1 from "../styled-components/button";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.15)"
          hoverFillColor="#222"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight
            bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Transform Your Skills<br/>
            <span className="text-white/90">With Expert Tutors</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <StyledButton1 text="Browse Tutors" />
            <button className="px-8 py-3 text-lg font-medium text-white 
                            bg-transparent border-2 border-white/30 rounded-lg
                            hover:bg-white/10 hover:border-white/50 transition-all">
              Become a Tutor
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-8">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              5,000+ Verified Tutors
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Satisfaction Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-6 border-2 border-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
