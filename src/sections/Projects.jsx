function Projects() {
  const projects = [
    {
      title: "University Management System",
      description:
        "A complete university management system with student, faculty, attendance, and course management.",
      tech: "PHP • MySQL • HTML • CSS",
    },
    {
      title: "Quiz & Exam Management",
      description:
        "A web application for creating quizzes, conducting exams, and managing results.",
      tech: "C# • SQL Server • WinForms",
    },
    {
      title: "Grade Management System",
      description:
        "Desktop application for managing student grades, GPA calculation, and reports.",
      tech: "C# • SQL Server",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio built using React and Tailwind CSS.",
      tech: "React • Tailwind CSS",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#050816] px-8 py-28 text-white lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-lg font-semibold text-cyan-400">
            My Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Here are some of the projects I have built while learning
            software development and artificial intelligence.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-violet-400 hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]"
            >
              {/* Image Placeholder */}
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                <span className="text-6xl">🖥️</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6">
                  <span className="rounded-full bg-violet-500/20 px-4 py-2 text-sm text-violet-300">
                    {project.tech}
                  </span>
                </div>

                <div className="flex gap-4">
                  <button className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-700">
                    GitHub
                  </button>

                  <button className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold transition hover:bg-cyan-400/10">
                    Live Demo
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;