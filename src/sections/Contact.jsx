import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const el = sectionRef.current;

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

  // 🔥 SEND EMAIL FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.honeypot.value;

    // 🛑 1. BOT PROTECTION (Honeypot)
    if (honeypot) {
      console.log("Bot detected 🚫");
      return;
    }

    // 🛑 2. RATE LIMIT (1 min)
    const lastSent = localStorage.getItem("lastEmailTime");
    if (lastSent && Date.now() - lastSent < 60000) {
      setStatus("⏳ Please wait before sending again");
      return;
    }

    // 🛑 3. VALIDATION
    if (name.length < 2) {
      setStatus("Enter valid name");
      return;
    }

    if (!email.includes("@")) {
      setStatus("Enter valid email");
      return;
    }

    if (message.length < 10) {
      setStatus("Message too short");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_j7m9dma",
        "template_u1dazsj",
        formRef.current,
        "fJkzzIimkXeLbV2yt"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          localStorage.setItem("lastEmailTime", Date.now());
          form.reset();
        },
        (error) => {
          console.log(error);
          setLoading(false);
          setStatus("❌ Failed to send message");
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <div className="contact-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-sm">
            Open to internships, freelance & AI projects.
          </p>

          <div className="mt-6 text-gray-500 text-sm">
            📧 varunpunnal59@gmail.com <br />
            📞 +91 9322037458
          </div>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form w-full flex flex-col gap-4"
        >
          {/* 🔥 HONEYPOT FIELD */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="form-field p-3 bg-white/5 border border-white/10 rounded-lg"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="form-field p-3 bg-white/5 border border-white/10 rounded-lg"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="form-field p-3 bg-white/5 border border-white/10 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm mt-2 text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;