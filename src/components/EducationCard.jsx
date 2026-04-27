const EducationCard = ({ edu }) => {
  return (
    <div className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/30 transition">

      <h3 className="text-xl font-semibold mb-1">
        {edu.degree}
      </h3>

      <p className="text-gray-400 text-sm">
        {edu.institution}
      </p>

      <p className="text-gray-500 text-xs mt-1">
        {edu.duration} • {edu.grade}
      </p>

      <p className="text-gray-400 text-sm mt-4">
        {edu.description}
      </p>

      {/* Subjects */}
      <div className="mt-4 flex flex-wrap gap-2">
        {edu.subjects.map((sub, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 border border-white/10 rounded-full"
          >
            {sub}
          </span>
        ))}
      </div>

      {/* Achievements */}
      <ul className="mt-4 text-xs text-gray-500 list-disc list-inside space-y-1">
        {edu.achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;