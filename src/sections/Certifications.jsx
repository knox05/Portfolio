import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import certifications from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelector(".cert-header"),
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

    const cards = el.querySelectorAll(".cert-card");
    const isMobile = window.innerWidth < 768;

        cards.forEach((card, i) => {
        let fromX = 0;
        let fromY = 0;

        // 🔥 Only ONE direction at a time (NO diagonal)
        if (i % 4 === 0) {
            fromY = 80; // bottom
        } else if (i % 4 === 1) {
            fromX = -120; // left
        } else if (i % 4 === 2) {
            fromX = 120; // right
        } else {
            fromY = -80; // top
        }

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
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 30%",
              scrub: isMobile ? false : 1,
            }
            }
        );
    });
        
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-32 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="cert-header mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Certifications
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl text-sm">
            Certifications that validate my technical knowledge and skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <CertificationCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;