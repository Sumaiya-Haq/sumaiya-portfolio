function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "C#",
    "Python",
    "MySQL",
    "Git",
    "GitHub",
    "PHP",
    "C++",
  ];

  return (
    <section
      id="skills"
      className="bg-[#050816] px-8 py-28 text-white lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-lg font-semibold text-cyan-400">
            My Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Here are the technologies and tools I use to build modern,
            responsive, and scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group flex h-40 cursor-pointer flex-col items-center justify-center rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-violet-400 hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]"
            >
              <div className="mb-4 text-5xl">💻</div>

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;