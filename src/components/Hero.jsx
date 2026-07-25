function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[140px]"></div>
      <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-8 pt-24 lg:flex-row lg:justify-between lg:px-12">

        {/* Left Side */}
        <div className="max-w-xl text-center lg:text-left">

          <p className="mb-4 text-xl font-medium text-cyan-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sumaiya Haq
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-gray-200">
            AI Engineer • Full Stack Developer • CSE Student
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
            Building AI, LLM & Modern Web Applications with creativity and
            innovation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
            <button className="rounded-xl bg-violet-600 px-8 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-violet-700">
              Explore
            </button>

            <button className="rounded-xl border border-violet-500 px-8 py-3 font-semibold transition duration-300 hover:bg-violet-500/20">
              Contact
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center justify-center">

          <div className="flex h-[430px] w-[430px] items-center justify-center rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 shadow-[0_0_120px_rgba(139,92,246,0.45)]">

            <h2 className="text-center text-4xl font-bold leading-tight text-white">
              🚀 3D Scene
              <br />
              Coming Soon
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;