export default function AboutPage() {
    return (
      <div className="bg-[#C1E899] text-black min-h-screen py-8 px-4 md:px-8">
        {/* Container for the content */}
        <div className="max-w-4xl mx-auto bg-[#E6F0DC] p-6 md:p-8 rounded-lg shadow-md space-y-6">
          <h1 className="text-3xl font-bold">About CuraFitt</h1>
  
          <p>
            At Curafitt, we believe recovery is more than just regaining strength—
            it's about reclaiming your life. Our journey began with a simple
            but powerful question: How can we make recovery easier, faster,
            and more engaging for both patients and physical therapists?
          </p>
  
          {/* Placeholder image #1 */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/800x400.png?text=Recovery+Journey"
              alt="Placeholder: Recovery Journey"
              className="rounded shadow-md w-full max-w-2xl"
            />
          </div>
  
          <p>
            The inspiration came from personal experiences with injuries and
            the challenges faced during physical therapy. We realized that
            despite advancements in healthcare, recovery programs often lack
            the tools to keep patients engaged and therapists informed.
            With that insight, we set out to create a solution that bridges
            the gap between care and technology.
          </p>
  
          {/* Placeholder image #2 */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/800x400.png?text=Bridging+Technology"
              alt="Placeholder: Bridging Technology"
              className="rounded shadow-md w-full max-w-2xl"
            />
          </div>
  
          <p>
            Our mission is to revolutionize physical therapy by empowering patients
            with tools to take charge of their recovery while equipping
            therapists with actionable insights to provide the best possible
            care.
          </p>
  
          <p>
            Our team is a diverse group of innovators — engineers and healthcare
            enthusiasts — united by a shared passion for creating technology
            that truly makes a difference. Together, we are building a future
            where recovery isn’t just a challenge—it’s an opportunity to thrive.
          </p>
  
          {/* Placeholder image #3 */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/800x400.png?text=Innovation+in+PT"
              alt="Placeholder: Innovation in PT"
              className="rounded shadow-md w-full max-w-2xl"
            />
          </div>
  
          <p className="font-semibold text-lg">
            Curafitt: Your Partner in Recovery.
          </p>
        </div>
      </div>
    )
  }