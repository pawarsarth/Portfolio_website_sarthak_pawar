export function Skills() {
  const skills = [
    "JavaScript", "C++", "Python", "SQL",
    "MERN Stack", "Next.js", "Prisma", "Pinecone",
    "Git", "GitHub", "Postman","docker"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <span key={i} className="bg-purple-700/40 px-5 py-2 rounded-full text-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
