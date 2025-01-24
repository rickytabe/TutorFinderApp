import Squares from "../styled-components/Squares.jsx";
import StyledButton1 from "../styled-components/button";

const HeroSection = () => {
  const SquaresComponent = Squares as React.FC<{
    speed?: number;
    squareSize?: number;
    direction?: string;
    borderColor?: string;
    hoverFillColor?: string;
  }>;

  return (
    <section className="relative bg-black text-white min-h-screen lg:min-h-[80vh] flex items-center  justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <SquaresComponent
          speed={0.15}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.15)"
          hoverFillColor="#222"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 text-center ">
          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl font-bold mt-20 mb-6 leading-tight
            bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Transform Your Skills
            <br />
            <span className="text-white/90">With Expert Tutors</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <StyledButton1 text="Browse Tutors" />
            <button
              className="px-8 py-3 text-lg font-medium text-white 
                            bg-transparent border-2 border-white/30 rounded-lg
                            hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Become a Tutor
            </button>
          </div>
          {/* Trust Badges */}
          <div className="flex flex-wrap text-xl justify-center gap-6 text-white/80 mb-8">
            <span className="flex items-center gap-2">
              ✅ 5,000+ Verified Tutors
            </span>
            <span className="flex items-center gap-2">
              🔒 Satisfaction Guaranteed
            </span>
            <span className="flex items-center gap-2">
              ⭐ 4.5/5 Average Tutor Rating
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden md:block -translate-x-1/2 z-10 animate-bounce ">
        <div className="w-6 h-6 border-2 border-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
