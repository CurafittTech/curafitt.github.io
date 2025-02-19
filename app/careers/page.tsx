export default function CareersPage() {
    return (
      <div className="bg-[#ffffff] min-h-screen text-black px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Join Our Team at CuraFitt</h1>
          <p className="mb-4">
            We&rsquo;re always on the lookout for talented individuals who are passionate
            about revolutionizing physical therapy.
          </p>
  
          {/* Engineering Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Engineering</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Embedded Software Engineer */}
              <div className="bg-[#ffffff] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Embedded Software Engineer</h3>
                <p className="mt-2">
                  Help build and maintain our cutting-edge wearable products,
                  ensuring high performance, scalability, and reliability.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/8zby2SUn1VVEQpvs9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#ffffff] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
  
              {/* Mobile Application Developer */}
              <div className="bg-[#ffffff] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Mobile Application Developer</h3>
                <p className="mt-2">
                  Develop a mobile application that will be the basis of human interation with our product. 
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/8zby2SUn1VVEQpvs9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#ffffff] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Market Research Analyst</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Market Research Analyst */}
              <div className="bg-[#ffffff] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Sales Representative</h3>
                <p className="mt-2">
                  Drive growth by researching and connecting our products with clinics,
                  hospitals, and potential clients worldwide.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/8zby2SUn1VVEQpvs9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#ffffff] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
  
              {/* Physical Therapy Consultant */}
              <div className="bg-[#ffffff] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Physical Therapy Consultant</h3>
                <p className="mt-2">
                  Provide PT expertise and work with a team of engineers to design and develop product.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/8zby2SUn1VVEQpvs9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#ffffff] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </section>
  
          {/* General CTA */}
          <p className="mb-4">
            Interested in joining us but don&rsquo;t see a position that matches your skillset?
            Fill out our{' '}
            <a
              href="https://forms.gle/8zby2SUn1VVEQpvs9"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              general application form
            </a>
            {' '}and we&rsquo;ll be in touch!
          </p>
        </div>
      </div>
    )
  }
