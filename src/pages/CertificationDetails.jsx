import { useParams, Link } from "react-router-dom";
import certifications from "../data/certifications";
import OptimizedImage from "../components/OptimizedImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CertificationDetails = () => {
  const { id } = useParams();
  const cert = certifications.find((c) => c.id === id);

  const pageRef = useRef();

  useEffect(() => {
    const el = pageRef.current;

    gsap.fromTo(
      el.querySelectorAll(".animate"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  if (!cert)
    return (
      <div className="text-white p-20 text-center">
        Certification not found
      </div>
    );

  return (
    <div
      ref={pageRef}
      className="min-h-screen px-6 md:px-20 py-32 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* 🔙 Back */}
        <Link
          to="/"
          className="animate text-gray-400 hover:text-white transition"
        >
          ← Back
        </Link>

        {/* 🏷️ Title */}
        <h1 className="animate text-3xl sm:text-4xl font-semibold mt-6">
          {cert.title}
        </h1>

        {/* 🖼️ Main Image */}
        <div className="animate mt-6 rounded-xl overflow-hidden border border-white/10">
          <OptimizedImage
            src={cert.image}
            alt={cert.title}
            width={900}
            className="w-full object-cover"
          />
        </div>

        {/* 🧾 Description */}
        <p className="animate mt-6 text-gray-400 leading-relaxed">
          {cert.longDescription}
        </p>

        {/* 🧠 Skills */}
        <div className="animate mt-6 flex flex-wrap gap-2">
          {cert.skills.map((s, i) => (
            <span
              key={i}
              className="border border-white/10 px-3 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>

        {/* ⭐ Features */}
        <div className="animate mt-10">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {cert.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* 🖼️ Screenshots */}
        {cert.screenshots && cert.screenshots.length > 0 && (
          <div className="animate mt-12">
            <h2 className="text-xl font-semibold mb-6">Screenshots</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {cert.screenshots.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-white/10 group"
                >
                  <OptimizedImage
                    src={img}
                    alt={`cert-${i}`}
                    width={600}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CertificationDetails;