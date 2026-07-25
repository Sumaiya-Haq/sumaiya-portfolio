function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] px-8 py-28 text-white lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-lg font-semibold text-cyan-400">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project idea or just want to say hello? Feel free to
            contact me anytime.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="mb-2 text-xl font-bold">📧 Email</h3>
              <p className="text-gray-400">
                sumaiya@example.com
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="mb-2 text-xl font-bold">💻 GitHub</h3>
              <p className="text-gray-400">
                github.com/Sumaiya-Haq
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="mb-2 text-xl font-bold">📍 Location</h3>
              <p className="text-gray-400">
                Bangladesh
              </p>
            </div>

          </div>

          {/* Right */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-violet-500/20 bg-white/5 p-4 outline-none focus:border-violet-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-violet-500/20 bg-white/5 p-4 outline-none focus:border-violet-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-2xl border border-violet-500/20 bg-white/5 p-4 outline-none focus:border-violet-400"
            ></textarea>

            <button
              className="rounded-xl bg-violet-600 px-8 py-3 font-semibold transition hover:bg-violet-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;