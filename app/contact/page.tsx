export default function ContactPage() {
    return (
      <div className="bg-[#A8B5A6] min-h-screen text-black flex items-center justify-center px-4 py-8">
        <div className="max-w-xl w-full bg-[#E6F0DC] rounded-lg shadow-md p-6 md:p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p>
            We&rsquo;d love to hear from you! Whether you have questions about our product,
            want to schedule a demo, or just say hello — drop us a line.
          </p>
  
          <div className="flex flex-col space-y-4">
            <div className="bg-white rounded shadow p-4">
              <h2 className="font-semibold">Email</h2>
              <p>
                <a
                  className="text-blue-600 underline"
                  href="mailto:curafitt.info@gmail.com"
                >
                  curafitt.info@gmail.com
                </a>
              </p>
            </div>
  
            <div className="bg-white rounded shadow p-4">
              <h2 className="font-semibold">Phone</h2>
              <p>857-320-1619</p>
            </div>
  
            <div className="bg-white rounded shadow p-4">
              <h2 className="font-semibold">Contact Form</h2>
              <p>
                You can also fill out our{' '}
                <a
                  href="https://forms.gle/YOUR_CONTACT_FORM"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact form
                </a>{' '}
                and we&rsquo;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
