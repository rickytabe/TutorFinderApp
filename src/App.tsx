import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import { LearnerRegister } from "./components/Auth/learners/leanerRegistration";
import TutorRegister from "./components/Auth/tutors/tutorRegistration";
import { LearnerLogin } from "./components/Auth/learners/learnerLogin";
import { TutorLogin } from "./components/Auth/tutors/tutorLogin";
import { AuthProvider } from "./components/Auth/shared/firebaseAuthUtils"; 
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';
import LearnerHomePage from "./components/Main/learner-pages/homePage";
import TutorHomePage from "./components/Main/tutor-pages/homePage";

function App() {
  return (
    <Router>
      <AuthProvider> 
        <ToastContainer /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/learner-registration" element={<LearnerRegister />} />
          <Route path="/auth/tutor-registration" element={<TutorRegister />} />
          <Route path="/auth/learner-login" element={<LearnerLogin />} />
          <Route path="/auth/tutor-login" element={<TutorLogin />} />
          <Route path="/learner-homePage" element={<LearnerHomePage />} /> 
          <Route path="/tutor-homePage" element={<TutorHomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
