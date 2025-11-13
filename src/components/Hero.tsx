import profilePic from '../assets/photo.jpg'; // adjust path based on your folder structure

export function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-b from-black via-gray-900 to-black px-6 gap-10 md:gap-20">
      {/* Profile Image */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg hover:scale-105 transition-transform">
        <img
          src={profilePic}
          alt="Sarthak Pawar"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
          Hi, I'm <span className="text-purple-500">Sarthak Pawar</span>
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Full Stack Developer | AI Innovator | Problem Solver
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <a
            href="https://github.com/pawarsarth"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sarthak-pawar-a9562427a"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pawar.sarthak24@gmail.com"
            className="hover:text-purple-400 transition"
          >
            Email
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
