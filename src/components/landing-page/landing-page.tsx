import HeroSection from "./hero";
import NavBar from "./navbar";
import AnimateText from '../animation'
import SocialProof from "./social-proof";
import ValueGrid from "./value-proposition";
import TutorShowcase from "./tutor-showcase";
import TrendingSkills from "./trending-skill";
import HowItWorks from "./how-it-works";
import PricingTransparency from "./pricing";


const LandingPage = ()=>{
  
    return(
        <div>
            <NavBar />
            <HeroSection />
            <SocialProof />
            <ValueGrid />
            <TutorShowcase />
            <TrendingSkills />
            <HowItWorks />
            <PricingTransparency />
            <AnimateText />
        </div>
    )
}

export default LandingPage;