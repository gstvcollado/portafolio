export default function Skill({ cards, id }) {
  return (
    <div id={id} className="bg-gradient-to-r from-[#0a1a2f] to-[#1e3a8a]  p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              {card.title}
            </h3>

            {/* Skills */}
            <ul className="list-disc list-inside text-gray-600">
              {card.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            {/* Íconos */}
            {card.icons && (
              <div className="flex gap-4 mt-4">
                {card.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
