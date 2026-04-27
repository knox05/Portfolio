const EducationCard = ({ edu }) => {
  return (
    <div className="group relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition hover:border-white/30">
      
      {/* 🔹 Timeline Dot */}
      <div className="absolute -left-3 top-6 w-3 h-3 bg-white rounded-full opacity-70 group-hover:scale-125 transition"></div>

      {/* 🔹 Duration */}
      <p className="text-xs text-gray-500 mb-2 tracking-widest">
        {edu.duration}
      </p>

      {/* 🔹 Degree */}
      <h3 className="text-lg sm:text-xl font-semibold leading-tight">
        {edu.degree}
      </h3>

      {/* 🔹 Institution */}
      <p className="text-gray-400 text-sm mt-1">
        {edu.institution}
      </p>

      {/* 🔹 Grade */}
      {edu.grade && (
        <p className="text-gray-500 text-xs mt-1 italic">
          {edu.grade}
        </p>
      )}

      {/* 🔹 Description */}
      <p className="text-gray-400 text-sm mt-4 leading-relaxed">
        {edu.description}
      </p>

      {/* 🔥 MINOR DEGREE */}
      {edu.minor && (
        <div className="mt-4">
          <p className="text-sm text-white font-medium">
            Minor: {edu.minor}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {edu.minorDetails}
          </p>
        </div>
      )}

      {/* 🔹 Subjects (FIXED from skills → subjects) */}
      <div className="flex flex-wrap gap-2 mt-4">
        {edu.subjects?.map((sub, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 border border-white/10 rounded-full hover:border-white/30 transition"
          >
            {sub}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;