import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    /* 1. Added 'h-full' and 'flex flex-col' to ensure the card fills its parent and stacks content vertically */
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition duration-300 bg-white/5 h-full flex flex-col">

      {/* 🖼️ IMAGE */}
      <div className="overflow-hidden aspect-video"> 
        {/* 2. Added 'aspect-video' to keep all image containers identical in ratio */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* 🧾 CONTENT */}
      {/* 3. Added 'flex-1' and 'flex flex-col' to push the buttons to the bottom */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* 4. Added 'line-clamp' to prevent long descriptions from breaking the layout */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 🛠️ TECH STACK */}
        {/* 5. 'mt-auto' on the container below ensures buttons sit at the bottom */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border border-white/10 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔗 ACTION BUTTONS */}
        <div className="flex gap-3 flex-wrap mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm border border-white/20 rounded-full hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm border border-white/20 rounded-full hover:bg-white hover:text-black transition"
          >
            Live
          </a>

          <Link
            to={`/project/${project.id}`}
            className="flex-1 text-center px-4 py-2 text-sm bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;