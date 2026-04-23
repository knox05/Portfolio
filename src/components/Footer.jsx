const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
        
        {/* LEFT */}
        <p>
          © {new Date().getFullYear()} Varun. All rights reserved.
        </p>

        {/* CENTER - SOCIALS */}
        <div className="flex gap-6">
          <a
            href="https://github.com/knox05"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vyankatesh-punnal-652007346/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:varunpunnal59@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        {/* RIGHT - BACK TO TOP */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;