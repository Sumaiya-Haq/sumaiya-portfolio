function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] px-8 py-24 text-white lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Side - Photo Placeholder */}
        <div className="flex justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 shadow-[0_0_80px_rgba(139,92,246,0.35)]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-violet-500/10 blur-2xl"></div>

            {/* Placeholder */}
            <div className="relative z-10 text-center">
              <div className="mb-4 text-7xl">👤</div>

              <h3 className="text-3xl font-bold">
                Your Photo
              </h3>

              <p className="mt-3 text-gray-300">
                Add your profile picture later
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div>

          <p className="mb-3 text-lg font-semibold text-cyan-400">
            About Me
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Passionate
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}AI Engineer
            </span>
            <br />
            & Full Stack Developer
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-400">
            Hello! I'm <span className="font-semibold text-white">Sumaiya Haq</span>,
            a Computer Science student passionate about Artificial Intelligence,
            Full Stack Development, and modern web technologies.
          </p>

          <p className="mb-8 text-lg leading-8 text-gray-400">
            I love creating modern, responsive, and user-friendly web
            applications while continuously learning new technologies
            and solving real-world problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-6 text-center backdrop-blur-md">
              <h3 className="text-4xl font-bold text-violet-400">
                10+
              </h3>

              <p className="mt-2 text-gray-300">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center backdrop-blur-md">
              <h3 className="text-4xl font-bold text-cyan-400">
                5+
              </h3>

              <p className="mt-2 text-gray-300">
                Technologies
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;