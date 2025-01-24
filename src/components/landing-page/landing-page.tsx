import HeroSection from "./hero";
import NavBar from "./navbar";
import AnimateText from '../animation'
import SocialProof from "./social-proof";
import ValueGrid from "./value-proposition";
import TutorShowcase from "./tutor-showcase";
import TrendingSkills from "./trending-skill";


const LandingPage = ()=>{
  
    return(
        <div>
            <NavBar />
            <HeroSection />
            <SocialProof />
            <ValueGrid />
            <TutorShowcase />
            <TrendingSkills />
            <AnimateText />
        </div>
    )
}

export default LandingPage;