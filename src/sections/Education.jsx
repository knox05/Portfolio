import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import education from "../data/education";
import EducationCard from "../components/EducationCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    // Header animation
    gsap.fromTo(
      el.querySelector(".edu-header"),
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

    const cards = el.querySelectorAll(".edu-card");

    cards.forEach((card, i) => {
      let fromX = 0;
      let fromY = 0;

      // 🔥 clean directional animation (no diagonal)
      if (i % 4 === 0) fromY = 80;
      else if (i % 4 === 1) fromX = -120;
      else if (i % 4 === 2) fromX = 120;
      else fromY = -80;

      gsap.fromTo(
        card,
        {
          x: fromX,
          y: fromY,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            scrub: 1, // 🔥 reversible
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-32 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="edu-header mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Education
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl text-sm">
            My academic journey and foundational knowledge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="edu-card">
              <EducationCard edu={edu} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;