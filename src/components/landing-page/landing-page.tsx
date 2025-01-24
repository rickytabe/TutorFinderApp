import HeroSection from "./hero";
import NavBar from "./navbar";
import AnimateText from '../animation'
import SocialProof from "./social-proof";
import ValueGrid from "./value-proposition";

const LandingPage = ()=>{
  
    return(
        <div>
            <NavBar />
            <HeroSection />
            <SocialProof />
            <ValueGrid />
            <AnimateText />
        </div>
    )
}

export default LandingPage;