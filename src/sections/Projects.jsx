import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;
    

    // Header animation
    gsap.fromTo(
      el.querySelector(".projects-header"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Cards animation (alternate left/right)
    const cards = el.querySelectorAll(".project-card");
    const isMobile = window.innerWidth < 768; 

    cards.forEach((card, i) => {
      gsap.fromTo(
      card,
      {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 30%",
          scrub: isMobile ? false : 1,
        }
      }
    );
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* 🔥 Header */}
        <div className="projects-header mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl text-sm sm:text-base">
            A selection of projects showcasing my skills in frontend
            development, UI design, and performance-focused applications.
          </p>
        </div>

        {/* 🧱 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;