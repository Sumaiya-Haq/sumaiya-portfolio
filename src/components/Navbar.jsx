function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        <h1 className="text-2xl font-bold">
          Sumaiya<span className="text-violet-500">Verse</span>
        </h1>

        <ul className="hidden gap-8 text-gray-300 md:flex">
          <li className="cursor-pointer hover:text-violet-400">About</li>
          <li className="cursor-pointer hover:text-violet-400">Skills</li>
          <li className="cursor-pointer hover:text-violet-400">Projects</li>
          <li className="cursor-pointer hover:text-violet-400">Contact</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;