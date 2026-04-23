import { useState, useEffect } from "react";

const sections = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Scroll to section with offset fix
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // navbar height offset
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // 🔥 Detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
      
      {/* 🔹 Main Navbar */}
      <div
        className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex justify-between items-center shadow-lg transition-all duration-300 ${
          scrolled ? "scale-[0.98] bg-white/10" : ""
        }`}
      >
        
        {/* Logo */}
        <h1
          className="text-lg md:text-xl font-semibold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Vyankatesh.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`cursor-pointer transition ${
                active === sec
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 md:hidden shadow-lg">
          <ul className="flex flex-col gap-4 text-sm text-center">
            {sections.map((sec) => (
              <li
                key={sec}
                onClick={() => scrollToSection(sec)}
                className={`cursor-pointer ${
                  active === sec ? "text-white" : "text-gray-400"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;