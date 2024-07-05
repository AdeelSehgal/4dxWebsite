import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Video1 from './Components/Video1';
import TiredofTheseIssues from './Components/TiredofTheseIssues';
import HomeVideo2 from './Components/HomeVideo2';
import HomeVideo3 from './Components/HomeVideo3';
import HomeVideo4 from './Components/HomeVideo4';
import HomeVideo5 from './Components/HomeVideo5';
import HomeVideo6 from './Components/HomeVideo6';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServicesSection';
import TextAnimation from './Components/TextAnimation';
import TermsandConditions from "./Components/TermsandConditions";
import PrivacyandPolicy from "./Components/PrivacyandPolicy";
import Membership_section from './Components/Membership_section';
import BookCall from './Components/BookCall';
import Trusted_section from './Components/Trusted_section';
import Contact from "./Components/Contact";
import Logos_section from './Components/Logos_section';
import Getstarted from './Components/Getstarted';
import Subscribe from './Components/Subscribe';
import Videocarousel from './Components/Videocarousel';
import Results from './Components/Results';
import Preloader from './Components/Preloader';
import FAQS from './Components/FAQS';
import BottomBar from './Components/BottomBar';
import FixedImage from './Components/FixedImage';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prevProgress + 1; // Increment by 10% for demonstration
      });
    }, 30); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/TermsandConditions",
      element: <><Navbar /> <TermsandConditions /> <Footer /></>
    },
    {
      path: "/PrivacyandPolicy",
      element: <><Navbar /> <PrivacyandPolicy /> <Footer /></>
    },
    {
      path: "/Contact",
      element: <><Navbar /> <Contact /> <Footer /></>
    },
    {
      path: "/",
      element: (
        <>
          <FixedImage />
          <Navbar />
          {loading && <Preloader progress={progress} />}
          <div className='z-[2] relative md:mb-[100vh]'>
            <TextAnimation />
            <Video1 />
            <TiredofTheseIssues />
            <HomeVideo2 />
            <HomeVideo3 />
            <HomeVideo4 />
            <HomeVideo5 />
            <HomeVideo6 />
            <ServicesSection />
            <Videocarousel />
            <Subscribe />
            <Membership_section />
            <BookCall />
            <Trusted_section />
            <Logos_section />
            <Results />
            <FAQS />
            <Getstarted />
            <BottomBar />
          </div>
          <Footer />
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
