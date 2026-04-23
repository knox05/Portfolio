import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = heroRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      el.querySelector(".hero-badge"),
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        el.querySelector(".hero-title"),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        el.querySelector(".hero-desc"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        el.querySelector(".hero-buttons"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        el.querySelector(".hero-img"),
        { x: 120, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        "-=0.8"
      );
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* 🔲 GRID BACKGROUND (Tech style) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* 🔢 Japanese vertical accent */}
      <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 text-white/10 text-xs tracking-[6px] rotate-180 [writing-mode:vertical-rl] font-mono">
        ポートフォリオ
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        
        {/* 🧠 TEXT */}
        <div>
          <p className="hero-badge text-gray-400 mb-4 text-sm tracking-wide">
            👋 Hey, I'm Vyankatesh Punnal
          </p>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Full Stack Developer <br />
            & <span className="text-gray-500">AI Enthusiast</span>
          </h1>

          <p className="hero-desc mt-6 text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Building scalable MERN applications, interactive dashboards, and modern web
            experiences. Passionate about Agentic AI and user-centric design.
          </p>

          {/* 🔘 BUTTONS */}
          <div className="hero-buttons mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
            >
              View Work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* 🧑‍💻 IMAGE */}
        <div className="hero-img flex justify-center md:justify-end">
          <div className="relative group">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-3xl opacity-40 group-hover:opacity-60 transition"></div>

            {/* Frame */}
            <div className="absolute inset-0 rounded-2xl border border-white/10"></div>

            <img
              src="/profile.png"
              alt="Varun"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* 🔢 Decorative Numbers */}
      <div className="absolute right-10 top-40 text-white/5 text-6xl font-mono hidden md:block">
        01
      </div>

      <div className="absolute left-10 bottom-20 text-white/5 text-4xl font-mono hidden md:block">
        DEV
      </div>
    </section>
  );
};

export default Hero;