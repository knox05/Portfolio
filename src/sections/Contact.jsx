import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    // Left side animation
    gsap.fromTo(
      el.querySelector(".contact-left"),
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

    // Form animation
    gsap.fromTo(
      el.querySelector(".contact-form"),
      { x: 100, opacity: 0 },
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

    // Input stagger animation
    gsap.fromTo(
      el.querySelectorAll(".form-field"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
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
      id="contact"
      className="py-32 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* 🧾 LEFT */}
        <div className="contact-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            I'm open to internships, freelance projects, and collaborations in
            full-stack development and AI-based applications.
            </p>

          {/* contact info */}
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p className="text-gray-500 text-sm mt-4">
            📧 varunpunnal59@gmail.com <br />
            📞 +91 9322037458
            </p>
          </div>
        </div>

        {/* 📩 FORM */}
        <form className="contact-form w-full flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="form-field p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white/30 focus:bg-white/10 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="form-field p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white/30 focus:bg-white/10 transition"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="form-field p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white/30 focus:bg-white/10 transition"
          />

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;