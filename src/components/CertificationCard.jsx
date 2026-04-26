import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";

const CertificationCard = ({ cert }) => {
  return (
    <div className="group h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition bg-white/5">

      {/* 🖼️ IMAGE */}
      <div className="overflow-hidden h-48">
        <OptimizedImage
          src={cert.image}
          alt={cert.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* 🧾 CONTENT */}
      <div className="p-5 flex flex-col flex-grow">
        
        <h3 className="text-xl font-semibold mb-1 line-clamp-1">
          {cert.title}
        </h3>

        <p className="text-gray-500 text-sm mb-2 line-clamp-1">
          {cert.issuer}
        </p>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {cert.description}
        </p>

        {/* 🛠️ SKILLS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cert.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border border-white/10 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 🔗 BUTTON */}
        <div className="mt-auto">
          <Link
            to={`/certification/${cert.id}`}
            className="w-full inline-block text-center px-4 py-2 text-sm bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CertificationCard;