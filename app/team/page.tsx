export default function TeamPage() {
    // Remaining team members
    const teamMembers = [
      {
        name: 'Vidhi Gondalia',
        role: 'Co-Founder',
        image: '/vidhigondalia.png',
        linkedin: 'https://www.linkedin.com/in/vidhi-gondalia',
      },
      {
        name: 'Prasanna Bansode',
        role: 'Co-Founder',
        image: '/prasannabansode.png',
        linkedin: 'https://www.linkedin.com/in/prasanna-bansode',
      },
      {
        name: "Manas Pange",
        role: "Embedded Software Engineer",
        image: "/manaspange.png",
        linkedin: "https://www.linkedin.com/in/devanshi--patel/",
      },
      {
        name: 'Devanshi Patel',
        role: 'Mobile Application Developer',
        image: '/devanshipatel.png',
        linkedin: 'https://www.linkedin.com/in/devanshi--patel/',
      },
      {
        name: 'Devan Kumar',
        role: 'Embedded Software Engineer',
        image: '/devankumar.png',
        linkedin: 'https://www.linkedin.com/in/devankumar222/',
      },
      {
        name: 'Darsh Gondalia',
        role: 'Machine Learning Engineer',
        image: '/darshgondalia.png',
        linkedin: 'https://www.linkedin.com/in/darsh-gondalia',
      },
      {
        name: 'Avinash Bedi',
        role: 'Market Research Analyst',
        image: '/avibedi.png',
        linkedin: 'https://www.linkedin.com/in/avinash-bedi',
      },
      // Add more team members if needed
    ]
  
    return (
      <div className="bg-white min-h-screen text-black px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Meet the Team</h1>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Image without extra padding or background */}
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#041c93] font-medium hover:underline mt-1"
              >
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
