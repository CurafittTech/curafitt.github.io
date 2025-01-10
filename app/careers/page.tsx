export default function CareersPage() {
    return (
      <div className="bg-[#C1E899] min-h-screen text-black px-4 py-8">
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
              {/* Software Engineer */}
              <div className="bg-[#E6F0DC] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="mt-2">
                  Help build and maintain our cutting-edge software products,
                  ensuring high performance, scalability, and reliability.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/YOUR_GOOGLE_FORM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
  
              {/* Machine Learning Engineer */}
              <div className="bg-[#E6F0DC] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Machine Learning Engineer</h3>
                <p className="mt-2">
                  Develop and optimize ML models to power advanced analytics
                  and insights for ACL rehabilitation tracking.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/YOUR_GOOGLE_FORM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </section>
  
          {/* Sales & Marketing Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Sales & Marketing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sales Representative */}
              <div className="bg-[#E6F0DC] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Sales Representative</h3>
                <p className="mt-2">
                  Drive growth by connecting our products with clinics,
                  hospitals, and potential clients worldwide.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/YOUR_GOOGLE_FORM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
  
              {/* Marketing Specialist */}
              <div className="bg-[#E6F0DC] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold">Marketing Specialist</h3>
                <p className="mt-2">
                  Develop creative campaigns to spread awareness about
                  CuraFitt&rsquo;s mission, solutions, and success stories.
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/YOUR_GOOGLE_FORM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#9ACFFA] hover:bg-[#72B8F9] text-black font-semibold py-2 px-4 rounded transition-colors"
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
              href="https://forms.gle/YOUR_GOOGLE_FORM"
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