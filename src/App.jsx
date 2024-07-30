import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationSection from "./components/Education";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ResearchProjects from "./components/ResearchProject";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";

const App = ()=>{
  return(
    
  <div className="overflox-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selecetion:text-cyan-300"> 
    <div className="fixed top-0 -z-10 h-full w-full" >
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
</div>
     <div className="container mx-auto px-8">
     <Navbar/>
     <Hero/>
     <EducationSection/>
    <Technologies/>
    <Experience/>
    <Projects/>
    <ResearchProjects/>
    <Certificate/>
    <Contact/>
     </div>
     </div>
  );
};
export default App


