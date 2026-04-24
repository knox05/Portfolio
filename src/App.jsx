import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";
import CertificationDetails from "./pages/CertificationDetails";
import Certifications from "./sections/Certifications";
import ProjectDetails from "./pages/ProjectDetails";

/* 🔹 Home Page */
function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Divider />

      <About />
      <Divider />

      <Projects />
      <Divider />

      <Experience />
      <Divider />

      <Certifications />
      <Divider />

      <Contact />
      <Divider />

      <Footer />
    </>
  );
}

/* 🔹 Animated Routes */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/certification/:id" element={<CertificationDetails />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* 🔹 Main App */
function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white overflow-x-hidden">

        {/* 🌑 BASE BACKGROUND */}
        <div className="fixed inset-0 -z-50 bg-black"></div>

        {/* 🌌 RADIAL LIGHT (MAIN DEPTH) */}
        <div className="fixed inset-0 -z-40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]"></div>

          {/* subtle colored glow */}
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-10"></div>
          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-10"></div>
        </div>

        {/* 🧱 GRID (TECH FEEL) */}
        <div className="fixed inset-0 -z-30 pointer-events-none 
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] 
          bg-[size:40px_40px]">
        </div>

        {/* 🌫️ NOISE TEXTURE (DEPTH FIX) */}
        <div className="fixed inset-0 -z-20 pointer-events-none opacity-[0.03] 
          bg-[url('https://www.transparenttextures.com/patterns/noise.png')]">
        </div>

        {/* 🔹 Vertical Tech Line */}
        <div className="fixed left-6 top-0 h-full w-px 
          bg-gradient-to-b from-transparent via-white/20 to-transparent z-0">
        </div>

        {/* 🧱 CONTENT */}
        <div className="relative z-10">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;

/* 🔹 Divider */
const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-6xl mx-auto" />
);