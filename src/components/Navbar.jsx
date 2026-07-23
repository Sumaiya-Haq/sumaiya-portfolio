function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          Sumaiya
          <span className="text-violet-500">Verse</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="cursor-pointer hover:text-violet-400 transition-all duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-violet-400 transition-all duration-300">
            Skills
          </li>

          <li className="cursor-pointer hover:text-violet-400 transition-all duration-300">
            Projects
          </li>

          <li className="cursor-pointer hover:text-violet-400 transition-all duration-300">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;