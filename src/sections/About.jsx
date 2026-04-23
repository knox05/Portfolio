import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    // Left content animation
    gsap.fromTo(
      el.querySelector(".about-left"),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Right skills animation (stagger)
    gsap.fromTo(
      el.querySelectorAll(".skill"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🧠 Left Content */}
        <div className="about-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            About Me
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I'm a Computer Science Engineering student with strong experience in
            Full Stack Development using the MERN stack. I enjoy building scalable,
            high-performance web applications and interactive dashboards.
            </p>

            <p className="text-gray-500 mt-4 text-sm sm:text-base">
            I have hands-on experience working with REST APIs, modern frontend frameworks,
            and SDLC practices. Currently, I'm exploring Agentic AI and advanced frontend
            animations to build next-generation web experiences.
            </p>
        </div>

        {/* ⚡ Right Skills */}
        <div className="flex flex-wrap gap-3">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "C++",
            "Java",
            "REST APIs",
            "Git & GitHub",
            "Postman",
            "Vercel",
            "Render"
            ].map(
            (skill, i) => (
              <span
                key={i}
                className="skill px-4 py-2 text-sm border border-white/10 bg-white/5 rounded-full backdrop-blur-md hover:border-white/30 transition"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;