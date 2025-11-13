export function Achievements() {
  const list = [
    "🏅 3rd place at SIH Internal Hackathon 2024, Mandsaur University",
    "🥈 2nd place at Edutech Hackathon 2023 (₹3,000 prize)",
    "🎯 Google Arcade Program – Legend Tier Achiever"
  ];

  return (
    <section id="achievements" className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold text-purple-400 mb-8">Achievements</h2>
      <ul className="text-gray-300 text-lg space-y-4 max-w-2xl mx-auto">
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  )
}
