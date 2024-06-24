import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Video1 from './Components/Video1'
import TiredofTheseIssues from './Components/TiredofTheseIssues'
import HomeVideo2 from './Components/HomeVideo2'
import HomeVideo3 from './Components/HomeVideo3'
import HomeVideo4 from './Components/HomeVideo4'
import HomeVideo5 from './Components/HomeVideo5'
import HomeVideo6 from './Components/HomeVideo6'
import Footer from './Components/Footer'
import ServicesSection from './Components/ServicesSection'
import TextAnimation from './Components/TextAnimation'
import TermsandConditions from "./Components/TermsandConditions"
import PrivacyandPolicy from "./Components/PrivacyandPolicy"
import Membership_section from './Components/Membership_section'
import BookCall from './Components/BookCall'
import Trusted_section from './Components/Trusted_section'




function App() {

  const router = createBrowserRouter([
    {
      path: "/TermsandConditions",
      element: <><Navbar /> <TermsandConditions /> <Footer /> </>
    },
    {
      path: "/PrivacyandPolicy",
      element: <><Navbar /> <PrivacyandPolicy /> <Footer /> </>
    },

    {
      path: "/",
      element: (< >
        <Navbar />
        <div className='z-[2] relative mb-[100vh]'>
          <TextAnimation />
          <Video1 />
          <TiredofTheseIssues />
          <HomeVideo2 />
          <HomeVideo3 />
          <HomeVideo4 />
          <HomeVideo5 />
          <HomeVideo6 />
          <ServicesSection/>
          <Membership_section/>
          <BookCall/>
          <Trusted_section/>
        </div>
        <Footer />
      </>)
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
