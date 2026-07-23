function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px]"></div>

      <p className="relative z-10 text-cyan-400 text-xl mb-4">
        👋 Hello, I'm
      </p>

      <h1 className="relative z-10 text-6xl md:text-8xl font-extrabold leading-tight">
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Sumaiya Haq
        </span>
      </h1>

      <p className="relative z-10 mt-6 text-xl md:text-2xl text-gray-300">
        AI Engineer • Full Stack Developer • CSE Student
      </p>

      <p className="relative z-10 mt-4 max-w-2xl text-gray-400 text-lg">
        Building AI, LLM & Modern Web Applications with creativity and innovation.
      </p>

      <div className="relative z-10 mt-10 flex gap-5">
        <button className="rounded-xl bg-violet-600 px-8 py-3 font-semibold transition duration-300 hover:bg-violet-700 hover:scale-105">
          Explore
        </button>

        <button className="rounded-xl border border-violet-500 px-8 py-3 font-semibold transition duration-300 hover:bg-violet-500/20 hover:scale-105">
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;
