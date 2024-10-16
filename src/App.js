import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturesPage from './components/FeaturesSection';
import AboutEthAi from './components/About';
import Tokenomics from './components/Takemonics';
import RoadmapSection from './components/RoadmapSection';
import RoadmapPhaseTwo from './components/BiggerInsights';
import FullPowerLandingPage from './components/FullPower';
import FAQSection from './components/FaqSection';
import ExploreDAppSection from './components/DAppSection';
import Footer from './components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id={id}
    >
      {children}
    </motion.section>
  );
};

const App = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <AnimatedSection id="home">
          <Home />
        </AnimatedSection>
        <AnimatedSection id="features">
          <FeaturesPage />
        </AnimatedSection>
        <AnimatedSection id="about">
          <AboutEthAi />
        </AnimatedSection>
        <AnimatedSection id="tokenomics">
          <Tokenomics />
        </AnimatedSection>
        <AnimatedSection id="roadmap">
          <RoadmapSection />
        </AnimatedSection>
        <AnimatedSection id="roadmapPhaseTwo">
          <RoadmapPhaseTwo />
        </AnimatedSection>
        <AnimatedSection id="fullPower">
          <FullPowerLandingPage />
        </AnimatedSection>
        <AnimatedSection id="faq">
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection id="exploreDApp">
          <ExploreDAppSection />
        </AnimatedSection>
        <Footer />
      </div>
    </div>
  );
};

export default App;