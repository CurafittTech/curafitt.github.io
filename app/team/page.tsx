export default function TeamPage() {
    // Two co-founders with bigger, square images
    const coFounders = [
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
    ]
  
    // Remaining team members (4 people per row)
    const teamMembers = [
      {
        name: 'Devanshi Patel',
        role: 'Application Developer',
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
        role: 'Market Research and Outreach',
        image: '/avibedi.png',
        linkedin: 'https://www.linkedin.com/in/avinash-bedi',
      },
      // Add more team members if needed
    ]
  
    return (
      <div className="bg-[#A8B5A6] min-h-screen text-black px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Meet the Team</h1>
          <p className="mb-8 text-lg">
            Our team is a diverse group of innovators—engineers and healthcare enthusiasts—
            united by a shared passion for creating technology that truly makes a difference.
          </p>
  
          {/* Co-Founders Section (side by side, bigger images) */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            {coFounders.map((founder, idx) => (
              <div
                key={idx}
                className="flex-1 bg-[#E6F0DC] rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="mb-4 w-64 h-64 object-cover shadow-lg"
                />
                <h2 className="text-xl font-semibold">{founder.name}</h2>
                <p className="text-sm mb-4">{founder.role}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
  
          {/* Other Team Members Section (4 columns, slightly smaller images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#E6F0DC] rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mb-4 w-48 h-48 object-cover shadow-lg"
                />
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
