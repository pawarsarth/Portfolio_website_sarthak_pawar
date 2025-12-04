import profilePic from '../assets/photo.jpg'; // make sure this image exists in src/assets/

export function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-b from-black via-gray-900 to-black px-6 gap-10 md:gap-20">
      {/* ---- Profile Image ---- */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg hover:scale-105 transition-transform">
        <img
          src={profilePic}
          alt="Sarthak Pawar"
          className="object-cover w-full h-full"
        />
      </div>

      {/* ---- Hero Text ---- */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
          Hi, I'm <span className="text-purple-500">Sarthak Pawar</span>
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Full Stack Developer | AI Innovator | Problem Solver
        </p>

        {/* ---- Social Links ---- */}
        <div className="flex gap-5 justify-center md:justify-start mb-6">
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

        {/* ---- Buttons ---- */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          >
            View My Work
          </a>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1y3_odtC9MYEKVkdv8e5M0k7KEmdefqa4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
