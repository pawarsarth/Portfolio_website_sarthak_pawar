export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-center px-6">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">Experience</h2>
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Web Developer Intern | RBTech</h3>
        <p className="text-gray-400 mb-4">June 2023 – August 2023</p>
        <ul className="text-gray-300 text-left space-y-2 list-disc list-inside">
          <li>Architected and deployed <strong>Medi AI</strong>, a healthcare platform for doctor and hospital discovery.</li>
          <li>Implemented dynamic filtering and real-time search, improving response time by 40%.</li>
          <li>Used React.js, Next.js, Express.js, and MySQL for full-stack architecture.</li>
        </ul>
      </div>
    </section>
  )
}
