import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Video1/>
      <TiredofTheseIssues/>
      <HomeVideo2/>
      <HomeVideo3/>
      <HomeVideo4/>
      <HomeVideo5/>
      <HomeVideo6/>
      <ServicesSection/>
      <Footer/>

    </>
  )
}

export default App
