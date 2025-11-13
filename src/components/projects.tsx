const projects = [
  {
    title: "Socially - Social Media Platform",
    desc: "Full-featured social app with media upload, Clerk auth, and Prisma ORM on PostgreSQL.",
    link: "https://socially-clone-44ob.vercel.app",
    tech: ["Next.js", "Node.js", "Express.js", "Prisma", "Clerk"]
  },
  {
    title: "AI Website & Image Generator",
    desc: "Gemini API-based AI platform for website and image generation via prompts.",
    link: "https://bolt-ai-clones-frontend.onrender.com",
    tech: ["React.js", "Express.js", "Gemini API"]
  },
  {
    title: "AI PDF RAG System",
    desc: "PDF-based AI Q&A system using Pinecone and Gemini for contextual answers.",
    link: "https://pdf-ai-frontend-4gqx.onrender.com",
    tech: ["React.js", "Express.js", "Pinecone", "Gemini API"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-center px-6">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-black p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-purple-700/40 px-3 py-1 rounded-full text-sm">{t}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" className="text-purple-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
