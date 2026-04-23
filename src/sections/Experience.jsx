const Experience = () => {
  return (
    <section className="py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10">Experience</h2>

        <div className="border border-white/10 p-6 rounded-xl bg-white/5 backdrop-blur-md">
          <h3 className="text-xl font-semibold">
            Software Engineer Intern
          </h3>
          <p className="text-gray-400 text-sm">
            BlueStock.in • Oct 2023 – Nov 2023
          </p>

          <ul className="mt-4 text-gray-400 text-sm space-y-2">
            <li>• Developed and improved software features</li>
            <li>• Used Git for version control and debugging</li>
            <li>• Worked with Agile & SDLC methodologies</li>
            <li>• Optimized performance and usability</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;