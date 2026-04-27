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

    if (!el) return;

    // 🔹 Header animation
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
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // 🔹 Cards animation (NO crash, reversible)
    const cards = el.querySelectorAll(".edu-card");

    cards.forEach((card, i) => {
      let fromX = i % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        card,
        {
          x: fromX,
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
            scrub: 1, // 🔥 reversible animation
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

        {/* 🔹 Header */}
        <div className="edu-header mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Education
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl text-sm sm:text-base">
            My academic journey and technical foundation in computer science and game technology.
          </p>
        </div>

        {/* 🔹 Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {education?.map((edu, index) => (
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