export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">Sarthak Pawar</div>
        <div className="flex gap-8 text-lg">
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#achievements" className="hover:text-purple-400 transition">Achievements</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}
