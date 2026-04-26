import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import OptimizedImage from "../components/OptimizedImage";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const pageRef = useRef();

  useEffect(() => {
    const el = pageRef.current;

    gsap.fromTo(
      el.querySelectorAll(".animate"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div
      ref={pageRef}
      className="min-h-screen px-6 sm:px-10 md:px-20 py-32 text-white"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* 🔙 Back */}
        <Link
          to="/"
          className="animate text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>

        {/* 🏷️ Title */}
        <h1 className="animate text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 tracking-tight">
          {project.title}
        </h1>

        {/* 🖼️ Main Image */}
        <div className="animate mt-8 rounded-2xl overflow-hidden border border-white/10">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            width={1000}
            className="w-full object-cover"
          />
        </div>

        {/* 🧾 Description */}
        <p className="animate mt-6 text-gray-400 leading-relaxed">
          {project.longDescription}
        </p>

        {/* ⚙️ Tech Stack */}
        <div className="animate mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm border border-white/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔗 Links */}
        <div className="animate mt-6 flex gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Live Demo
          </a>
        </div>

        {/* ⭐ Features */}
        <div className="animate mt-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* 🖼️ Screenshots */}
        <div className="animate mt-12">
          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/10 group"
              >
                <OptimizedImage
                  src={img}
                  alt={`screenshot-${i}`}
                  width={600}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;