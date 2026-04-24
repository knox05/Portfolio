import { useParams, Link } from "react-router-dom";
import certifications from "../data/certifications";

const CertificationDetails = () => {
  const { id } = useParams();
  const cert = certifications.find((c) => c.id === id);

  if (!cert) return <div className="text-white p-20">Not found</div>;

  return (
    <div className="min-h-screen px-6 md:px-20 py-32 text-white">
      <div className="max-w-5xl mx-auto">

        <Link to="/" className="text-gray-400">← Back</Link>

        <h1 className="text-4xl font-semibold mt-6">{cert.title}</h1>

        <img
          src={cert.image}
          className="mt-6 rounded-xl border border-white/10"
        />

        <p className="mt-6 text-gray-400">{cert.longDescription}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {cert.skills.map((s, i) => (
            <span key={i} className="border px-3 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-xl mb-4">Features</h2>
          <ul className="list-disc text-gray-400">
            {cert.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CertificationDetails;