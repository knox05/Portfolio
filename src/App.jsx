import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";

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

      <Contact />
      <Divider />

      <Footer />
    </>
  );
}

/* 🔹 Animated Routes Wrapper */
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

        {/* 🌈 GLOW BACKGROUND */}
        <div className="fixed inset-0 -z-40 pointer-events-none">
          <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-500 rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] opacity-10"></div>
        </div>

        {/* 🌌 RADIAL OVERLAY */}
        <div className="fixed inset-0 -z-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]"></div>
        </div>

        {/* 🔹 Vertical Tech Line (FIXED POSITION) */}
        <div className="fixed left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent z-0"></div>

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
  <div className="h-px bg-white/10 max-w-6xl mx-auto" />
);